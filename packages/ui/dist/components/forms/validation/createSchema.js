import * as Yup from 'yup';
export function createSchema(fields) {
    const shape = {};
    fields.forEach((field) => {
        let schema;
        switch (field.typeForm) {
            case 'input':
            case 'inputCurrency':
            case 'inputmask':
            case 'select':
            case 'radio':
                schema = Yup.string();
                break;
            case 'checkbox':
                schema = Yup.boolean().oneOf([true], "**Bagian ini harus dicentang");
                break;
            case 'checklist':
            case 'multiselect':
                schema = Yup.array();
                break;
            case 'calendar':
                schema = Yup.date().typeError(`${field.label} harus berupa tanggal yang valid`);
                break;
            case 'number':
                schema = Yup.number()
                    .typeError(`${field.label} harus berupa angka`)
                    .transform((value, originalValue) => String(originalValue).trim() === '' ? undefined : value).min(1, `${field.label} wajib lebih dari 0`);
                break;
            case 'toggle':
                schema = Yup.boolean();
                break;
            default:
                schema = Yup.mixed();
        }
        if (field.isRequired) {
            if (field.typeForm === 'multiselect') {
                schema = Yup.array().min(1, `${field.label} wajib dipilih`);
            }
            else {
                schema = schema.required(`${field.label} wajib diisi`);
            }
        }
        shape[field.name] = schema;
    });
    return Yup.object().shape(shape);
}
