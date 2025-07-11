import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";
const CheckboxField = ({ name, label, checked, onChange, error, required = false, disabled = false, isHidden = false, }) => {
    return (_jsxs("div", { className: classNames("field-checkbox", { hidden: isHidden }), children: [_jsx(Checkbox, { inputId: name, name: name, checked: checked, onChange: (e) => onChange(e.checked ?? false), 
                // required={required}
                disabled: disabled, className: classNames({ "p-invalid": !!error }) }), _jsxs("div", { className: "flex flex-column", children: [_jsxs("label", { htmlFor: name, className: "ml-2 isLabel", children: [label, required && (_jsx("sup", { children: _jsx("i", { className: "pi pi-asterisk mandatory" }) }))] }), error && _jsx("small", { className: "p-error ml-2", children: error })] })] }));
};
export default CheckboxField;
