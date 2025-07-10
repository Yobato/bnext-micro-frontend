import React from "react";
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
declare const ToggleField: React.FC<ToggleFieldProps>;
export default ToggleField;
//# sourceMappingURL=ToggleField.d.ts.map