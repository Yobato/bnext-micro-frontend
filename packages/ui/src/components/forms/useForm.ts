'use client'
import { useState } from 'react';
import * as Yup from 'yup';

export type UseFormOptions<T> = {
    initialValue: T;
    validationSchema?: Yup.ObjectSchema<any>;
    onSubmit: (values: T) => void;
};

export function useForm<T extends Record<string, any>>({
    initialValue,
    validationSchema,
    onSubmit,
}: UseFormOptions<T>){
    const [formData, setFormData] = useState<T>(initialValue);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

    const setField = <K extends keyof T>(field: K, value: T[K]) => {
        setFormData((prev)=> ({...prev, [field]:value}));
    };

    const handleChange = <K extends keyof T>(field: K) => (value: T[K]) =>{
        setField(field, value);
        if(validationSchema){
            validationSchema
            .validateAt(field as string, {[field]: value})
            .then(()=>{
                setErrors((prev)=> ({...prev, [field]: undefined}));
            })
            .catch((err)=>{
                setErrors((prev)=> ({...prev, [field]: err.message}));
            });
        }
    };

    const handleBlur = <K extends keyof T>(field: K) => {
        const value = formData[field];
        if (validationSchema) {
          validationSchema
            .validateAt(field as string, { [field]: value })
            .then(() => {
              setErrors((prev) => ({ ...prev, [field]: undefined }));
            })
            .catch((err) => {
              setErrors((prev) => ({ ...prev, [field]: err.message }));
            });
        }
      };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e?.preventDefault) e.preventDefault();
        if (validationSchema) {
          try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            onSubmit(formData);
          } catch (err: any) {
            const validationErrors: Partial<Record<keyof T, string>> = {};
            err.inner.forEach((e: any) => {
              validationErrors[e.path as keyof T] = e.message;
            });
            setErrors(validationErrors);
          }
        } else {
          onSubmit(formData);
        }
      };

      return{ 
        formData, setField, handleChange, handleBlur, handleSubmit, errors
      }
}