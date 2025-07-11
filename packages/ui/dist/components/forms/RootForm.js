"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "./useForm";
import { createSchema } from "./validation/createSchema";
import InputTextField from "./fields/InputTextField";
import InputCurrencyField from "./fields/InputCurrencyField";
import ToggleField from "./fields/ToggleField";
import CalendarField from "./fields/CalendarField";
import InputMaskField from "./fields/InputMaskField";
import InputNumberField from "./fields/InputNumberField";
import RadioGroupField from "./fields/RadioGroupField";
import CheckboxField from "./fields/CheckboxField";
import SelectDropdownField from "./fields/SelectDropdownField";
import MultiSelectField from "./fields/MultiSelectField";
import { Button } from "primereact/button";
function RootForm({ fields, initialValue, onSubmit, }) {
    const validationSchema = createSchema(fields);
    const { formData, errors, handleChange, handleSubmit, handleBlur } = useForm({
        initialValue,
        validationSchema,
        onSubmit,
    });
    const renderField = (field) => {
        const commonProps = {
            name: field.name,
            label: field.label,
            value: formData[field.name],
            onChange: handleChange(field.name),
            onBlur: handleBlur ? () => handleBlur(field.name) : undefined,
            error: errors[field.name],
            required: field.isRequired,
            disabled: field.isDisabled,
            placeholder: field.placeholder,
            isHidden: field.isHidden,
        };
        switch (field.typeForm) {
            case "input":
                return _jsx(InputTextField, { ...commonProps, maxLength: field.maxLength });
            case "inputCurrency":
                return (_jsx(InputCurrencyField, { ...commonProps, maxLength: field.maxLength }));
            case "toggle":
                return _jsx(ToggleField, { ...commonProps });
            case "calendar":
                return _jsx(CalendarField, { ...commonProps });
            case "inputmask":
                return _jsx(InputMaskField, { ...commonProps, mask: field.mask });
            case "number":
                return _jsx(InputNumberField, { ...commonProps });
            case "radio":
                return (_jsx(RadioGroupField, { ...commonProps, options: field.optionData || [] }));
            case "checkbox":
                return _jsx(CheckboxField, { ...commonProps, checked: field.checked });
            case "select":
                return (_jsx(SelectDropdownField, { ...commonProps, options: field.optionData || [] }));
            case "multiselect":
                return (_jsx(MultiSelectField, { ...commonProps, options: field.optionData || [] }));
            default:
                return null;
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-column gap-4", children: [fields.map((field) => (_jsx("div", { children: renderField(field) }, field.name))), _jsx("div", { className: "flex justify-end max-w-sm ml-auto", children: _jsx(Button, { type: "submit", className: "primary", children: "Submit" }) })] }));
}
export default RootForm;
