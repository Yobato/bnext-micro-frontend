"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToggleButton } from "primereact/togglebutton";
const ToggleField = ({ name, label, value, onChange, onBlur, error, required = false, disabled = false, isHidden = false, onLabel = "Aktif", offLabel = "Tidak Aktif", }) => {
    return (_jsxs("div", { className: isHidden ? "hidden" : "flex flex-column field", children: [_jsxs("span", { className: "mb-2", children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-pi-asterisk mandatory" }) }))] }), _jsx("div", { className: "w-fit", children: _jsx(ToggleButton, { className: "w-10rem", checked: value, onChange: (e) => onChange(e.value), onBlur: onBlur, disabled: disabled, onLabel: onLabel, offLabel: offLabel }) }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default ToggleField;
