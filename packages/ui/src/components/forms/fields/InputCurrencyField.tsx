"use client";

import React from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

// DATA YANG DIKIRIM MASIH BERUPA STRING
// HARUS KONVERT DULU DATA STRING KE NUMERIC DI HALAMAN YANG MEMANGGIL INPUTCURRENCYFIELD
export type InputCurrencyFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isHidden?: boolean;
  autoComplete?: string;
  maxLength: number;
  tabIndex?: number;
};

const formatToIDR = (value: number|string): string =>{
    const numeric =
      typeof value === "string"
        ? parseFloat(value.replace(/[^\d]/g, ""))
        : value;
    if (isNaN(numeric)) return "";
    return `Rp${numeric.toLocaleString("id-ID")}`;
}

// FUNGSI KONVERT STRING KE NUMERIC
// function parseCurrencyString(str: string): number {
//   return parseInt(str.replace(/\D/g, ""), 10);
// }

const InputCurrencyField: React.FC<InputCurrencyFieldProps> = ({
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
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const raw = e.target.value;
        const parsed = raw.replace(/[^\d]/g, "");
        onChange(parsed);
    }

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
        value={formatToIDR(value)}
        onChange={handleInputChange}
        onBlur={onBlur}
        // required={required}
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

export default InputCurrencyField;
