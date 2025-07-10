"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputMask } from "primereact/inputmask";
import { classNames } from "primereact/utils";
const InputMaskField = ({ name, label, value, onChange, error, required = false, disabled = false, placeholder, mask, isHidden = false, }) => {
    return (_jsxs("div", { className: isHidden ? "hidden" : "flex flex-column field", children: [_jsxs("label", { htmlFor: name, children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx(InputMask, { id: name, name: name, value: value, onChange: (e) => onChange(e.value || ""), mask: mask, placeholder: placeholder, disabled: disabled, className: classNames({ "p-invalid": !!error }), required: required }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default InputMaskField;
