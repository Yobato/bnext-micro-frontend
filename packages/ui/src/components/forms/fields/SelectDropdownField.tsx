"use client";

import React from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { classNames } from "primereact/utils";

export type Option = {
  label: string;
  value: string | number;
};

export type SelectDropdownFieldProps = {
  name: string;
  label: string;
  value: string | number | null;
  onChange: (value: string | number | null) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isHidden?: boolean;
  tabIndex?: number;
  options: Option[];
  showClear?: boolean;
};

const SelectDropdownField: React.FC<SelectDropdownFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  placeholder = "- Pilih salah satu -",
  isHidden = false,
  tabIndex,
  options,
  showClear = true,
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
      <Dropdown
        id={name}
        name={name}
        value={value}
        onChange={(e: DropdownChangeEvent) => onChange(e.value)}
        onBlur={onBlur}
        options={options}
        optionLabel="label"
        optionValue="value"
        placeholder={placeholder}
        filter
        showClear={showClear}
        disabled={disabled}
        className={classNames({ "p-invalid": !!error })}
        tabIndex={tabIndex}
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default SelectDropdownField;
