"use client";

import React from "react";
import { useForm } from "./useForm";
import { createSchema } from "./validation/createSchema";
import { FieldConfig } from "./validation/FieldConfig"; // nanti kita buat `FieldConfig`
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

// Import semua komponen Field
// import {
//   InputTextField,
//   SelectDropdownField,
//   ToggleField,
//   CalendarField,
//   InputCurrencyField,
//   InputMaskField,
//   InputNumberField,
//   RadioGroupField,
//   CheckboxField,
//   MultiSelectField,
// } from "./fields";

type RootFormProps<T extends Record<string, any>> = {
  fields: FieldConfig[];
  initialValue: T;
  onSubmit: (data: T) => void;
};

function RootForm<T extends Record<string, any>>({
  fields,
  initialValue,
  onSubmit,
}: RootFormProps<T>) {
  const validationSchema = createSchema(fields);
  const { formData, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValue,
    validationSchema,
    onSubmit,
  });

  const renderField = (field: FieldConfig) => {
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
        return <InputTextField {...commonProps} maxLength={field.maxLength} />;
      case "inputCurrency":
        return (
          <InputCurrencyField {...commonProps} maxLength={field.maxLength} />
        );
      case "toggle":
        return <ToggleField {...commonProps} />;
      case "calendar":
        return <CalendarField {...commonProps} />;
      case "inputmask":
        return <InputMaskField {...commonProps} mask={field.mask} />;
      case "number":
        return <InputNumberField {...commonProps} />;
      case "radio":
        return (
          <RadioGroupField {...commonProps} options={field.optionData || []} />
        );
      case "checkbox":
        return <CheckboxField {...commonProps} checked={formData[field.name]} />;
      case "select":
        return (
          <SelectDropdownField
            {...commonProps}
            options={field.optionData || []}
          />
        );
      case "multiselect":
        return (
          <MultiSelectField {...commonProps} options={field.optionData || []} />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-column gap-4">
      {fields.map((field) => (
        <div key={field.name}>{renderField(field)}</div>
      ))}
      <div className="flex justify-end max-w-sm ml-auto">
        <Button type="submit" className="primary">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default RootForm;
