import * as Yup from 'yup';
export type FieldType = 'input' | 'inputCurrency' | 'number' | 'checkbox' | 'calendar' | 'inputmask' | 'select' | 'radio' | 'checklist' | 'multiselect' | 'toggle';
type FieldConfig = {
    name: string;
    label: string;
    typeForm: FieldType;
    isRequired?: boolean;
};
export declare function createSchema(fields: FieldConfig[]): Yup.ObjectSchema<{
    [x: string]: never;
}, Yup.AnyObject, {
    [x: string]: any;
}, "">;
export {};
//# sourceMappingURL=createSchema.d.ts.map