"use client";

import React from "react";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";

export type InputNumberFieldProps = {
  name: string;
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isHidden?: boolean;
  min?: number;
  max?: number;
  step?: number;
  useGrouping?: boolean;
};

const InputNumberField: React.FC<InputNumberFieldProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  placeholder,
  isHidden = false,
  min,
  max,
  step = 1,
  useGrouping = true,
}) => {
  return (
    <div className={isHidden ? "hidden" : "flex flex-column field"}>
      <label htmlFor={name}>
        {label}
        {required && (
          <sup>
            <i className="pi pi-asterisk mandatory" />
          </sup>
        )}
      </label>
      <InputNumber
        id={name}
        name={name}
        value={value}
        onValueChange={(e) => onChange(e.value ?? null)}
        className={classNames({ "p-invalid": !!error })}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        useGrouping={useGrouping}
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default InputNumberField;
