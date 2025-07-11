import React from "react";
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
declare const RadioGroupField: React.FC<RadioGroupFieldProps>;
export default RadioGroupField;
//# sourceMappingURL=RadioGroupField.d.ts.map