export type FieldType = "input" | "inputCurrency" | "toggle" | "calendar" | "inputmask" | "number" | "radio" | "checkbox" | "select" | "multiselect";
export interface FieldConfig {
    name: string;
    label: string;
    typeForm: FieldType;
    isRequired?: boolean;
    isDisabled?: boolean;
    isHidden?: boolean;
    placeholder?: string;
    maxLength?: number;
    checked?: boolean;
    mask?: string;
    optionData?: {
        label: string;
        value: string | number;
    }[];
}
//# sourceMappingURL=FieldConfig.d.ts.map