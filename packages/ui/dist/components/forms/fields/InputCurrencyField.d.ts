import React from "react";
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
declare const InputCurrencyField: React.FC<InputCurrencyFieldProps>;
export default InputCurrencyField;
//# sourceMappingURL=InputCurrencyField.d.ts.map