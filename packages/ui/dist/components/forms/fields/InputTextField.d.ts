import React from "react";
export type InputTextFieldProps = {
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    isHidden?: boolean;
    autoComplete?: string;
    maxLength: number;
    tabIndex?: number;
};
declare const InputTextField: React.FC<InputTextFieldProps>;
export default InputTextField;
//# sourceMappingURL=InputTextField.d.ts.map