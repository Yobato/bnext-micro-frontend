"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
const SelectDropdownField = ({ name, label, value, onChange, onBlur, error, required = false, disabled = false, placeholder = "- Pilih salah satu -", isHidden = false, tabIndex, options, showClear = true, }) => {
    return (_jsxs("div", { className: isHidden ? "hidden" : "flex flex-column field", children: [_jsxs("label", { htmlFor: name, children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx(Dropdown, { id: name, name: name, value: value, onChange: (e) => onChange(e.value), onBlur: onBlur, options: options, optionLabel: "label", optionValue: "value", placeholder: placeholder, filter: true, showClear: showClear, disabled: disabled, className: classNames({ "p-invalid": !!error }), tabIndex: tabIndex }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default SelectDropdownField;
