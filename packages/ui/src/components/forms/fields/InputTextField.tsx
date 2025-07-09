"use client";

import React from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

export type InputTextFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isHidden?: boolean;
  autoComplete?: string;
  maxLength: number;
  tabIndex?: number;
};

const InputTextField: React.FC<InputTextFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  placeholder,
  isHidden = false,
  autoComplete = "on",
  maxLength,
  tabIndex,
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
      <InputText
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={required}
        className={classNames({ "p-invalid": !!error })}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        tabIndex={tabIndex}
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default InputTextField;
