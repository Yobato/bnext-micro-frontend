"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
const InputTextField = ({ name, label, value, onChange, onBlur, error, required = false, disabled = false, placeholder, isHidden = false, autoComplete = "on", maxLength, tabIndex, }) => {
    return (_jsxs("div", { className: isHidden ? "hidden" : "flex flex-column field", children: [_jsxs("label", { htmlFor: name, children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx(InputText, { id: name, name: name, value: value, onChange: (e) => onChange(e.target.value), onBlur: onBlur, 
                // required={required}
                className: classNames({ "p-invalid": !!error }), disabled: disabled, placeholder: placeholder, autoComplete: autoComplete, maxLength: maxLength, tabIndex: tabIndex }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default InputTextField;
