"use client";

import React from "react";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { classNames } from "primereact/utils";

export type Option = {
  label: string;
  value: string | number;
};

export type RadioGroupFieldProps = {
  name: string;
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  isHidden?: boolean;
};

const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  isHidden = false,
}) => {
  return (
    <div className={classNames("field", { hidden: isHidden })}>
      <label>
        {label}
        {required && (
          <sup>
            <i className="pi pi-asterisk mandatory" />
          </sup>
        )}
      </label>
      <div className="flex flex-wrap gap-3 mt-2">
        {options.map((option) => (
          <div key={option.value} className="flex align-items-center">
            <RadioButton
              inputId={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e: RadioButtonChangeEvent) => onChange(e.value)}
              onBlur={onBlur}
            />
            <label htmlFor={`${name}-${option.value}`} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default RadioGroupField;
