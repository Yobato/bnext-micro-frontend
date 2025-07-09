import * as Yup from 'yup';
export type UseFormOptions<T> = {
    initialValue: T;
    validationSchema?: Yup.ObjectSchema<any>;
    onSubmit: (values: T) => void;
};
export declare function useForm<T extends Record<string, any>>({ initialValue, validationSchema, onSubmit, }: UseFormOptions<T>): {
    formData: T;
    setField: <K extends keyof T>(field: K, value: T[K]) => void;
    handleChange: <K extends keyof T>(field: K) => (value: T[K]) => void;
    handleBlur: <K extends keyof T>(field: K) => void;
    handleSubmit: (e?: React.FormEvent) => Promise<void>;
    errors: Partial<Record<keyof T, string>>;
};
//# sourceMappingURL=useForm.d.ts.map