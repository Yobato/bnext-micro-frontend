import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Sidebar = ({ children }) => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "layout-menu-header hide", children: _jsx("span", { className: 'close-menu', children: _jsx("i", { className: "pi pi-times" }) }) }), _jsx("ul", { className: "layout-menu", id: 'sideBarBox', children: children })] }));
};
export default Sidebar;
