"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MultiSelect } from "primereact/multiselect";
import { classNames } from "primereact/utils";
const MultiSelectField = ({ name, label, value, options, onChange, error, required = false, disabled = false, isHidden = false, placeholder = "- Pilih opsi -", }) => {
    return (_jsxs("div", { className: classNames("flex flex-column field", { hidden: isHidden }), children: [_jsxs("label", { htmlFor: name, children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), _jsx(MultiSelect, { id: name, name: name, value: value, options: options, onChange: (e) => onChange(e.value), placeholder: placeholder, filter: true, disabled: disabled, className: classNames({ "p-invalid": !!error }) }), error && _jsx("small", { className: "p-error", children: error })] }));
};
export default MultiSelectField;
