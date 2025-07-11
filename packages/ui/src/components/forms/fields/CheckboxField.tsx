import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { classNames } from "primereact/utils";
import React from "react";

export type CheckboxFieldProps = {
  name: string;
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  isHidden?: boolean;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  checked,
  onChange,
  error,
  required = false,
  disabled = false,
  isHidden = false,
}) => {
  return (
    <div className={classNames("field-checkbox", { hidden: isHidden })}>
      <Checkbox
        inputId={name}
        name={name}
        checked={checked}
        onChange={(e: CheckboxChangeEvent) => onChange(e.checked ?? false)}
        // required={required}
        disabled={disabled}
        className={classNames({ "p-invalid": !!error })}
      />
      <div className="flex flex-column">
        <label htmlFor={name} className="ml-2 isLabel">
          {label}
          {required && (
            <sup>
              <i className="pi pi-asterisk mandatory" />
            </sup>
          )}
        </label>
        {error && <small className="p-error ml-2">{error}</small>}
      </div>
    </div>
  );
};

export default CheckboxField;
