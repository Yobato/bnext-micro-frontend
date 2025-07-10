"use client";

import React from "react";
import { ToggleButton } from "primereact/togglebutton";

export type ToggleFieldProps = {
  name: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  isHidden?: boolean;
  onLabel?: string;
  offLabel?: string;
};

const ToggleField: React.FC<ToggleFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  isHidden = false,
  onLabel = "Aktif",
  offLabel = "Tidak Aktif",
}) => {
  return (
    <div className={isHidden ? "hidden" : "flex flex-column field"}>
      <span className="mb-2">
        {label}
        {required && (
          <sup>
            <i className="pi pi-pi-asterisk mandatory"></i>
          </sup>
        )}
      </span>
      <div className="w-fit">
        <ToggleButton
          className="w-10rem"
          checked={value}
          onChange={(e) => onChange(e.value)}
          onBlur={onBlur}
          disabled={disabled}
          onLabel={onLabel}
          offLabel={offLabel}
        />
      </div>
      {error && <small className="p-error">{error}</small>}
    </div>
  );
};

export default ToggleField;
