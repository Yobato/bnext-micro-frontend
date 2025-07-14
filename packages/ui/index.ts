// import './src/styles/globals.css';

// Export component untuk Auth
export { default as FormLogin } from './src/components/auth/form';
export {default as Info} from './src/components/auth/info';
export { default as NoSupport } from './src/components/auth/noSupport';

// Export component untuk Layout
export { default as Header } from './src/components/layout/Header';
export { default as Footer } from './src/components/layout/Footer';
export { default as Sidebar } from './src/components/layout/Sidebar';

// Export component common
export { ErrorTimeout } from './src/components/common/ErrorTimeout';
export { TableSkeleton, FormSkeleton, CardSkeleton } from './src/components/common/LoadingSkeleton';

export { default as TableDefault } from './src/components/common/table/TableDefault';
export { default as Pagination } from './src/components/common/Pagination';
export type { ColumnProps } from './src/components/common/table/TableDefault'

// Export constant
export { menuRaw } from './src/constants/menu';

// Export form
export { useForm } from './src/components/forms/useForm';
export { default as InputTextField } from './src/components/forms/fields/InputTextField';
export { default as InputCurrencyField } from './src/components/forms/fields/InputCurrencyField';
export { default as SelectDropdownField } from './src/components/forms/fields/SelectDropdownField';
export { default as ToggleField } from './src/components/forms/fields/ToggleField';
export { default as CheckboxField } from './src/components/forms/fields/CheckboxField';
export { default as MultiSelectField } from './src/components/forms/fields/MultiSelectField';
export { default as InputMaskField } from './src/components/forms/fields/InputMaskField';
export { default as InputNumberField } from './src/components/forms/fields/InputNumberField';
export { default as CalendarField } from './src/components/forms/fields/CalendarField';
export { default as RadioGroupField } from './src/components/forms/fields/RadioGroupField';

export { createSchema } from './src/components/forms/validation/createSchema';
export {default as RootForm} from './src/components/forms/RootForm';
export type {FieldConfig} from './src/components/forms/validation/FieldConfig';

