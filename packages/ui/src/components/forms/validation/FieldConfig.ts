// packages/ui/src/components/forms/validation/FieldConfig.ts

export type FieldType =
  | "input"
  | "inputCurrency"
  | "toggle"
  | "calendar"
  | "inputmask"
  | "number"
  | "radio"
  | "checkbox"
  | "select"
  | "multiselect";

export interface FieldConfig {
  name: string;
  label: string;
  typeForm: FieldType;
  isRequired?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
  placeholder?: string;
  maxLength?: number;
  checked?: boolean; // for checkbox
  mask?: string; // for inputmask
  optionData?: { label: string; value: string | number }[]; // for select, radio, multiselect
}
