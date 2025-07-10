import React from "react";
export type CalendarFieldProps = {
    name: string;
    label: string;
    value: Date | null;
    onChange: (value: Date | null) => void;
    onBlur?: () => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    isHidden?: boolean;
    dateFormat?: string;
};
declare const CalendarField: React.FC<CalendarFieldProps>;
export default CalendarField;
//# sourceMappingURL=CalendarField.d.ts.map