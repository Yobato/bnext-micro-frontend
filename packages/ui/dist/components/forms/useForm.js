'use client';
import { useState } from 'react';
export function useForm({ initialValue, validationSchema, onSubmit, }) {
    const [formData, setFormData] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };
    const handleChange = (field) => (value) => {
        setField(field, value);
        if (validationSchema) {
            validationSchema
                .validateAt(field, { [field]: value })
                .then(() => {
                setErrors((prev) => ({ ...prev, [field]: undefined }));
            })
                .catch((err) => {
                setErrors((prev) => ({ ...prev, [field]: err.message }));
            });
        }
    };
    const handleBlur = (field) => {
        const value = formData[field];
        if (validationSchema) {
            validationSchema
                .validateAt(field, { [field]: value })
                .then(() => {
                setErrors((prev) => ({ ...prev, [field]: undefined }));
            })
                .catch((err) => {
                setErrors((prev) => ({ ...prev, [field]: err.message }));
            });
        }
    };
    const handleSubmit = async (e) => {
        if (e?.preventDefault)
            e.preventDefault();
        if (validationSchema) {
            try {
                await validationSchema.validate(formData, { abortEarly: false });
                setErrors({});
                onSubmit(formData);
            }
            catch (err) {
                const validationErrors = {};
                err.inner.forEach((e) => {
                    validationErrors[e.path] = e.message;
                });
                setErrors(validationErrors);
            }
        }
        else {
            onSubmit(formData);
        }
    };
    return {
        formData, setField, handleChange, handleBlur, handleSubmit, errors
    };
}
