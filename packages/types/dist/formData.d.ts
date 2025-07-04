interface OptionData {
    label: string;
    value: string;
}
export interface rootForm {
    name: string;
    label: string;
    typeForm: string;
    type?: string;
    placeholder?: string;
    isRequired?: boolean;
    isAutoCapitalize?: string;
    isOptionFilter?: boolean;
    optionData?: OptionData[];
    isAutoComplete?: string;
    keyfilter?: any;
    value?: any;
    style?: string;
    isDisabled?: boolean;
    maxLength?: number;
    tabIndex?: number;
    clear?: boolean;
    align?: any;
    minLegth?: number;
    onBlur?: (value?: any) => void;
    onChange?: (value?: any) => void;
    isHidden?: boolean;
}
export interface rootformProps {
    fields: rootForm[];
    data?: any;
    onSubmit?: (formData: {
        [key: string]: any;
    }) => void;
}
export interface Credentials {
    userName: string;
    password: string;
    ipAddres: string;
}
export {};
//# sourceMappingURL=formData.d.ts.map