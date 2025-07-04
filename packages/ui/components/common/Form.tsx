import React, { FormEvent, useState, useImperativeHandle, forwardRef, useEffect } from "react";
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { rootformProps } from "@bnext/types/formData";
import { classNames } from "primereact/utils";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Divider } from "primereact/divider";
import { InputNumber, InputNumberValueChangeEvent } from "primereact/inputnumber";
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';
import { Calendar } from "primereact/calendar";
import { MultiSelect } from 'primereact/multiselect';

const Form = forwardRef(({ fields, onSubmit, data }: rootformProps, ref) => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<{ [key: string]: any }>(() => {
        const initialData = data || {};
        fields.forEach((field) => {
            if (field.typeForm === 'radio' && initialData[field.name] == null && field.optionData?.length) {
                initialData[field.name] = field.optionData[0].value;
            }
        });
        return initialData;
    });

    const createValidationSchema = (fields: rootformProps['fields']) => {
        const shape = fields.reduce((schema, field) => {
            schema[field.name] = field.isRequired
                ? Yup.string().trim().required(`${field.label} is required`)
                : Yup.string().trim();
            return schema;
        }, {} as Record<string, Yup.AnySchema>);
        return Yup.object().shape(shape);
    };

    useEffect(() => {
        if (data) 
            setFormData((prev) => ({...prev, ...data}));
    }, [data])

    const validationSchema = createValidationSchema(fields);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement> | ToggleButtonChangeEvent | DropdownChangeEvent | CheckboxChangeEvent | RadioButtonChangeEvent | InputMaskChangeEvent, fieldName: string) => {
        console.log(`(handleChange at Form.tsx) called for "${fieldName}" with value: `, e.target.value);
        let value : any;
        if ('checked' in e.target && e.target.type === 'checklist') {
            if (e.target.checked) {
                value = e.target.value;
                setFormData({ ...formData, [fieldName]: value });
            } else {
                const { [fieldName]: _, ...rest } = formData;
                setFormData(rest);
            }
        } else {
            value = e.target.value;
            setFormData({ ...formData, [fieldName]: value });
        }
        try {
            await validationSchema.validateAt(fieldName, { [fieldName]: value });
            setErrors((prev) => ({ ...prev, [fieldName]: '' }));
        } catch (err: any) {
            setErrors((prev) => ({ ...prev, [fieldName]: err.message }));
        }
    };

    const handleSubmit = async (e?: FormEvent) => {
        if (e) e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            onSubmit?.(formData);
            return formData;
        } catch (error: any) {
            const validationErrors: { [key: string]: string } = {};
            error.inner.forEach((err: any) => {
                validationErrors[err.path] = err.message;
            });
            setErrors(validationErrors);
        }
    };

    useImperativeHandle(ref, () => ({
        handleSubmit,
    }));

    const formatToIDR = (value: any) => {
        if (value === undefined || value === null) return '';

        const numValue = typeof value === 'number' ? value : Number(value);

        if (isNaN(numValue)) return '';

        return `Rp${numValue.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };

    const renderForm = (field: any, key: number) => {
        switch (field.typeForm) {
            case "input":
                return (
                    <div key={field.name} className={field.isHidden ? "hidden" : "flex flex-column field"}>
                        <label htmlFor={field.name}>
                            {field.label} 
                            <sup className={field.isRequired ? '' : 'hidden'}> <i className="pi pi-asterisk mandatory"></i></sup>
                        </label>
                        <InputText
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] as string || ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, field.name)}
                            required={field.isRequired || false}
                            className={classNames({ 'p-invalid': errors[field.name] })}
                            type={field.type}
                            autoCapitalize={field.isAutoCapitalize || ''}
                            autoComplete={field.isAutoComplete || "true"}
                            keyfilter={field.keyfilter || undefined}
                            disabled={field.isDisabled || false}
                            maxLength={field.maxLength || undefined}
                            tabIndex={field.tabIndex || undefined}
                            onBlur={field.onBlur ? (e) => field.onBlur(e) : undefined}
                            placeholder={field.placeholder || undefined}
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case "inputCurrency":
                return (
                    <div key={field.name} className={field.isHidden ? "hidden" : "flex flex-column field"}>
                        <label htmlFor={field.name}>
                            {field.label} 
                            <sup className={field.isRequired ? '' : 'hidden'}> <i className="pi pi-asterisk mandatory"></i></sup>
                        </label>
                        <InputText
                            id={field.name}
                            name={field.name}
                            value={formatToIDR(formData[field.name])}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, field.name)}
                            required={field.isRequired || false}
                            className={classNames({ 'p-invalid': errors[field.name] })}
                            disabled={field.isDisabled || false}
                            maxLength={field.maxLength || undefined}
                            tabIndex={field.tabIndex || undefined}
                            placeholder={field.placeholder || undefined}
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case "toogle":
                return (
                    <div key={field.name} className={(field.isHidden ? "hidden" : "flex flex-column field")}>
                        <span className="mb-2">
                            {field.label}
                            <sup className={field.isRequired ? '' : 'hidden'}> <i className="pi pi-asterisk mandatory"></i></sup>
                        </span>
                        <ToggleButton
                            className="col-5"
                            checked={formData[field.name] as boolean || false}
                            onChange={(e: ToggleButtonChangeEvent) => handleChange(e, field.name)}
                            onLabel="Status Active"
                            offLabel="Status Unactive"
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case "select":
                return (
                    <div key={field.name} className={field.isHidden ? "hidden" : "flex flex-column field"}>
                        <span className="mb-2">
                            {field.label}
                            <sup className={field.isRequired ? '' : 'hidden'}> <i className="pi pi-asterisk mandatory"></i></sup>
                        </span>
                        <Dropdown
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={(e: DropdownChangeEvent) => { 
                                handleChange(e, field.name);
                                field.onChange ? field.onChange(e) : undefined;
                            }}
                            options={field.optionData}
                            optionValue="value"
                            className={classNames({ 'p-invalid': errors[field.name] })}
                            required={field.isRequired || false}
                            filter={field.isOptionFilter}
                            placeholder={field.placeholder || '- Please select an option -'}
                            tabIndex={field.tabIndex || undefined} 
                            showClear={field.clear || undefined}
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case "checklist":
                return (
                    <div key={field.name} className={field.isHidden ? "hidden" : "field-checkbox"}>
                        <Checkbox 
                            inputId={field.name} 
                            name={field.name} 
                            required={field.isRequired} 
                            value={field.value} 
                            onChange={(e: CheckboxChangeEvent) => handleChange(e, field.name)} 
                            checked={formData[field.name] == field.value} />
                        <label htmlFor={field.name} className="ml-2 isLabel">{field.label}</label>
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case "checkbox":
                return (
                    <div key={field.name} className={field.isHidden ? "hidden" : "flex flex-column field"}>
                        <span className="mb-2">
                            {field.label}
                            <sup className={field.isRequired ? '' : 'hidden'}> <i className="pi pi-asterisk mandatory"></i></sup>
                        </span>
                        <MultiSelect 
                            id={field.name}
                            name={field.name}
                            required={field.isRequired} 
                            options={field.optionData}
                            onChange={(e) => handleChange(e, field.name)}
                            placeholder={field.placeholder || '- Please select any option -'}
                            filter
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case "radio":
                return (
                    <div className="field" key={field.name}>
                        <label>{field.label}</label>
                        <div className="flex gap-3">
                            {field.optionData?.map((option: any) => (
                            <div key={option.value} className="flex align-items-center">
                                <RadioButton
                                    inputId={`${field.name}-${option.value}`}
                                    name={field.name}
                                    value={option.value}
                                    onChange={(e) => {
                                        handleChange(e, field.name);
                                        field.onChange ? field.onChange(e) : undefined;
                                    }}
                                    checked={formData[field.name] === option.value}
                                />
                                <label htmlFor={`${field.name}-${option.value}`} className="ml-2">
                                {option.label}
                                </label>
                            </div>
                            ))}
                        </div>
                        {errors[field.name] && <small className="p-error">{errors[field.name]}</small>}
                    </div>
                );
            case "line":
                return (
                    <Divider key={"line" + key} align={field.align} className="mt-5">
                        <span className="divider-title"> {field.value} </span>
                    </Divider>
                )
            case "number":
                return (
                    <div key={field.name} className={field.isHidden ? "hidden" : "flex flex-column field"}>
                        <span className="mb-2">
                            {field.label} 
                            <sup className={field.isRequired ? '' : 'hidden'}> <i className="pi pi-asterisk mandatory"></i></sup>
                        </span>
                        <InputNumber 
                            id={field.name}
                            name={field.name}
                            required={field.isRequired || false}
                            className={classNames({ 'p-invalid': errors[field.name] })}
                            disabled={field.isDisabled || false}
                            maxLength={field.maxLength || undefined}
                            tabIndex={field.tabIndex || undefined}
                            onBlur={field.onBlur || undefined}
                            minFractionDigits={2} 
                            maxFractionDigits={2}
                            onValueChange={(e: InputNumberValueChangeEvent) => handleChange(e, field.name)}
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case 'inputmask':
                return (
                    <div key={field.name} className="field">
                        <label htmlFor={field.name}>{field.label}</label>
                        <InputMask
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={(e: InputMaskChangeEvent) => handleChange(e, field.name)}
                            required={field.isRequired || false}
                            className={classNames({ 'p-invalid': errors[field.name] })}
                            mask="aaaa-***-999-aaaa"
                            placeholder={field.placeholder}
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
            case 'calendar':
                return (
                    <div key={field.name} className="field">
                        <label htmlFor={field.name}>{field.label}</label>
                        <Calendar
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || null}
                            onChange={(e) => handleChange(e, field.name)}
                            dateFormat={field.dateFormat || 'yy/mm/dd'}
                            showIcon
                            placeholder={field.placeholder}
                            className={classNames({ 'p-invalid': errors[field.name] })}
                            required={field.isRequired || false}
                        />
                        {errors[field.name] && (
                            <small className="p-error">{errors[field.name]}</small>
                        )}
                    </div>
                )
        }
    }

    return (
        <>
            { fields.map((field, i) => renderForm(field, i)) }
        </>
    );
});

export { Form };