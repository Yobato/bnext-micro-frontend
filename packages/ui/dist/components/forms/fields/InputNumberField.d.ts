import React from "react";
export type InputNumberFieldProps = {
    name: string;
    label: string;
    value: number | null;
    onChange: (value: number | null) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    isHidden?: boolean;
    min?: number;
    max?: number;
    step?: number;
    useGrouping?: boolean;
};
declare const InputNumberField: React.FC<InputNumberFieldProps>;
export default InputNumberField;
//# sourceMappingURL=InputNumberField.d.ts.map