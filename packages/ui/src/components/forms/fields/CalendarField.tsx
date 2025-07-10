"use client";

import React from "react";
import { Calendar } from "primereact/calendar";
import { classNames } from "primereact/utils";

export type CalendarFieldProps = {
  name: string;
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isHidden?: boolean;
  dateFormat?: string;
};

const CalendarField: React.FC<CalendarFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  placeholder = "",
  isHidden = false,
  dateFormat = "yy-mm-dd",
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
      <Calendar
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.value ?? null)}
        onBlur={onBlur}
        required={required}
        className={classNames({ "p-invalid": !!error })}
        disabled={disabled}
        placeholder={placeholder}
        dateFormat={dateFormat}
        showIcon
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default CalendarField;