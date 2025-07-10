"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";
const InputNumberField = ({ name, label, value, onChange, error, required = false, disabled = false, placeholder, isHidden = false, min, max, step = 1, useGrouping = true, }) => {
    return (_jsxs("div", { className: isHidden ? "hidden" : "flex flex-column field", children: [_jsxs("label", { htmlFor: name, children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx(InputNumber, { id: name, name: name, value: value, onValueChange: (e) => onChange(e.value ?? null), className: classNames({ "p-invalid": !!error }), disabled: disabled, required: required, placeholder: placeholder, min: min, max: max, step: step, useGrouping: useGrouping }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default InputNumberField;
