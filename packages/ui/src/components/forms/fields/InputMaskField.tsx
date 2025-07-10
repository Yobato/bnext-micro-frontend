"use client";
import React from "react";
import { InputMask } from "primereact/inputmask";
import { classNames } from "primereact/utils";

export type InputMaskFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  mask: string;
  isHidden?: boolean;
};

const InputMaskField: React.FC<InputMaskFieldProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  placeholder,
  mask,
  isHidden = false,
}) => {
  return (
    <div className={isHidden ? "hidden" : "flex flex-column field"}>
      <label htmlFor={name}>
        {label}
        {required && (
          <sup>
            <i className="pi pi-asterisk mandatory"></i>
          </sup>
        )}
      </label>
      <InputMask
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.value || "")}
        mask={mask}
        placeholder={placeholder}
        disabled={disabled}
        className={classNames({ "p-invalid": !!error })}
        required={required}
      ></InputMask>
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default InputMaskField;
