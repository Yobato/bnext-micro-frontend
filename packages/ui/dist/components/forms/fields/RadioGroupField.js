"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RadioButton } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
const RadioGroupField = ({ name, label, options, value, onChange, onBlur, error, required = false, isHidden = false, }) => {
    return (_jsxs("div", { className: classNames("field", { hidden: isHidden }), children: [_jsxs("label", { children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx("div", { className: "flex flex-wrap gap-3 mt-2", children: options.map((option) => (_jsxs("div", { className: "flex align-items-center", children: [_jsx(RadioButton, { inputId: `${name}-${option.value}`, name: name, value: option.value, checked: value === option.value, onChange: (e) => onChange(e.value), onBlur: onBlur }), _jsx("label", { htmlFor: `${name}-${option.value}`, className: "ml-2", children: option.label })] }, option.value))) }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default RadioGroupField;
