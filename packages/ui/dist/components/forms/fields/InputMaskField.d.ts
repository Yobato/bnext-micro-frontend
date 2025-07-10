import React from "react";
export type InputMaskFieldProps = {
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    mask: string;
    isHidden?: boolean;
};
declare const InputMaskField: React.FC<InputMaskFieldProps>;
export default InputMaskField;
//# sourceMappingURL=InputMaskField.d.ts.map