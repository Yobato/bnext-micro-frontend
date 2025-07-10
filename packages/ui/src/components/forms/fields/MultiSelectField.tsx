"use client";

import React from "react";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { classNames } from "primereact/utils";

export type MultiSelectFieldProps = {
  name: string;
  label: string;
  value: any[];
  options: { label: string; value: any }[];
  onChange: (value: any[]) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  isHidden?: boolean;
  placeholder?: string;
};

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
  name,
  label,
  value,
  options,
  onChange,
  error,
  required = false,
  disabled = false,
  isHidden = false,
  placeholder = "- Pilih opsi -",
}) => {
  return (
    <div className={classNames("flex flex-column field", { hidden: isHidden })}>
      <label htmlFor={name}>
        {label}
        {required && (
          <sup>
            <i className="pi pi-asterisk mandatory" />
          </sup>
        )}
      </label>
      <MultiSelect
        id={name}
        name={name}
        value={value}
        options={options}
        onChange={(e: MultiSelectChangeEvent) => onChange(e.value)}
        placeholder={placeholder}
        filter
        disabled={disabled}
        className={classNames({ "p-invalid": !!error })}
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default MultiSelectField;
