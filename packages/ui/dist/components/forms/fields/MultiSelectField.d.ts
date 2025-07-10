import React from "react";
export type MultiSelectFieldProps = {
    name: string;
    label: string;
    value: any[];
    options: {
        label: string;
        value: any;
    }[];
    onChange: (value: any[]) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    isHidden?: boolean;
    placeholder?: string;
};
declare const MultiSelectField: React.FC<MultiSelectFieldProps>;
export default MultiSelectField;
//# sourceMappingURL=MultiSelectField.d.ts.map