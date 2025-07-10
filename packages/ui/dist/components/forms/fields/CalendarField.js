"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar } from "primereact/calendar";
import { classNames } from "primereact/utils";
const CalendarField = ({ name, label, value, onChange, onBlur, error, required = false, disabled = false, placeholder = "", isHidden = false, dateFormat = "yy-mm-dd", }) => {
    return (_jsxs("div", { className: isHidden ? "hidden" : "flex flex-column field", children: [_jsxs("label", { htmlFor: name, children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx(Calendar, { id: name, name: name, value: value, onChange: (e) => onChange(e.value ?? null), onBlur: onBlur, required: required, className: classNames({ "p-invalid": !!error }), disabled: disabled, placeholder: placeholder, dateFormat: dateFormat, showIcon: true }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default CalendarField;
