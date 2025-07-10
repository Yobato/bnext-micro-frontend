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
declare const CheckboxField: React.FC<CheckboxFieldProps>;
export default CheckboxField;
//# sourceMappingURL=CheckboxField.d.ts.map