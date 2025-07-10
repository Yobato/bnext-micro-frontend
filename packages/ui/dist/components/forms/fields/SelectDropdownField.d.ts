import React from "react";
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
declare const SelectDropdownField: React.FC<SelectDropdownFieldProps>;
export default SelectDropdownField;
//# sourceMappingURL=SelectDropdownField.d.ts.map