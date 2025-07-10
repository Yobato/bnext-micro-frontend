"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
const formatToIDR = (value) => {
    const numeric = typeof value === "string"
        ? parseFloat(value.replace(/[^\d]/g, ""))
        : value;
    if (isNaN(numeric))
        return "";
    return `Rp${numeric.toLocaleString("id-ID")}`;
};
// FUNGSI KONVERT STRING KE NUMERIC
// function parseCurrencyString(str: string): number {
//   return parseInt(str.replace(/\D/g, ""), 10);
// }
const InputCurrencyField = ({ name, label, value, onChange, onBlur, error, required = false, disabled = false, placeholder, isHidden = false, autoComplete = "on", maxLength, tabIndex, }) => {
    const handleInputChange = (e) => {
        const raw = e.target.value;
        const parsed = raw.replace(/[^\d]/g, "");
        onChange(parsed);
    };
    return (_jsxs("div", { className: isHidden ? "hidden" : "flex flex-column field", children: [_jsxs("label", { htmlFor: name, children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx(InputText, { id: name, name: name, value: formatToIDR(value), onChange: handleInputChange, onBlur: onBlur, required: required, className: classNames({ "p-invalid": !!error }), disabled: disabled, placeholder: placeholder, autoComplete: autoComplete, maxLength: maxLength, tabIndex: tabIndex }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default InputCurrencyField;
