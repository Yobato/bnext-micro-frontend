import { FieldConfig } from "./validation/FieldConfig";
type RootFormProps<T extends Record<string, any>> = {
    fields: FieldConfig[];
    initialValue: T;
    onSubmit: (data: T) => void;
};
declare function RootForm<T extends Record<string, any>>({ fields, initialValue, onSubmit, }: RootFormProps<T>): import("react/jsx-runtime").JSX.Element;
export default RootForm;
//# sourceMappingURL=RootForm.d.ts.map