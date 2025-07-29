"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import "./tailwindUsage.css";
import React, { useState, useRef, useEffect } from "react";
import { Badge } from "primereact/badge";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import HeaderToggle from "./HeaderToggle";
const Flag = ({ src, alt }) => (_jsx("img", { alt: alt, src: src, className: "mr-2", style: { width: "18px" } }));
const dropdownStyle = {
    position: "absolute",
    right: 0,
    marginTop: "8px",
    width: "220px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    zIndex: 9999,
    overflow: "hidden",
    border: "1px solid #ddd",
};
const dropdownItemStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "white",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
};
const dropdownItemHover = {
    backgroundColor: "#f5f5f5",
};
const Header = ({ onLogout }) => {
    const langRef = useRef(null);
    const profileRef = useRef(null);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current &&
                !langRef.current.contains(e.target) &&
                profileRef.current &&
                !profileRef.current.contains(e.target)) {
                setIsLangOpen(false);
                setIsProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(ConfirmDialog, {}), _jsxs("div", { className: "layout-topbar", children: [_jsx("a", { href: "/home", className: "layout-topbar-logo", children: _jsx("img", { src: `${process.env.NEXT_PUBLIC_ASSET_URL}/layout/images/logo-bsi.png`, alt: "logo", width: 200, height: 100, style: { width: "auto", height: "3rem" } }) }), _jsx(HeaderToggle, {}), _jsxs("div", { className: "layout-menu-right", style: { position: "relative", alignItems: "center" }, children: [_jsxs("p", { className: "p-topbar mr-3", children: ["Hello, ", _jsx("b", { children: "Satriyo" }), _jsx("br", {}), "Admin", _jsx("br", {}), "[ 001 - Jakarta ]"] }), _jsx("i", { className: "menu-right pi pi-bell mr-3 ml-3 p-link p-overlay-badge", children: _jsx(Badge, { value: 1, severity: "danger" }) }), _jsxs("div", { className: "relative", ref: profileRef, children: [_jsx("button", { type: "button", className: "menu-right pi pi-user mr-3 ml-3 p-link", onClick: (e) => {
                                            e.stopPropagation();
                                            setIsProfileOpen((prev) => !prev);
                                        }, style: { background: "none", border: "none" } }), isProfileOpen && (_jsxs("div", { style: dropdownStyle, children: [_jsxs("div", { style: {
                                                    padding: "12px 16px",
                                                    borderBottom: "1px solid #eee",
                                                    fontSize: "13px",
                                                }, children: [_jsx("p", { style: { margin: 0, fontWeight: "bold" }, children: "Satriyo" }), _jsx("p", { style: { margin: 0, color: "#666" }, children: "Admin" }), _jsx("p", { style: { margin: 0, color: "#666" }, children: "001 - Jakarta" })] }), _jsxs("button", { style: dropdownItemStyle, onMouseOver: (e) => (e.currentTarget.style.backgroundColor =
                                                    dropdownItemHover.backgroundColor), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = "white"), onClick: () => alert("Change Password clicked"), children: [_jsx("i", { className: "pi pi-user-edit mr-2" }), "Change Password"] }), _jsxs("button", { style: { ...dropdownItemStyle, color: "#e11d48" }, onMouseOver: (e) => (e.currentTarget.style.backgroundColor = "#fdecea"), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = "white"), onClick: () => confirmDialog({
                                                    message: "Are you sure you want to logout?",
                                                    header: "Confirmation",
                                                    icon: "pi pi-exclamation-triangle",
                                                    defaultFocus: "reject",
                                                    acceptClassName: "p-button-danger",
                                                    acceptLabel: "Yes",
                                                    rejectLabel: "No",
                                                    accept: onLogout,
                                                }), children: [_jsx("i", { className: "pi pi-sign-out mr-2" }), "Logout"] })] }))] }), _jsxs("div", { className: "relative", ref: langRef, children: [_jsx("button", { type: "button", className: "menu-right pi pi-globe mr-3 ml-3 p-link", onClick: (e) => {
                                            e.stopPropagation();
                                            setIsLangOpen((prev) => !prev);
                                        }, style: { background: "none", border: "none" }, children: _jsx("span", { className: "language-label", children: " EN " }) }), isLangOpen && (_jsxs("div", { style: dropdownStyle, children: [_jsxs("button", { style: {
                                                    ...dropdownItemStyle,
                                                    display: "flex",
                                                    alignItems: "center",
                                                }, onMouseOver: (e) => (e.currentTarget.style.backgroundColor =
                                                    dropdownItemHover.backgroundColor), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = "white"), onClick: () => alert("Change lang to ID"), children: [_jsx(Flag, { src: "https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png", alt: "id-flag" }), "Bahasa Indonesia"] }), _jsxs("button", { style: {
                                                    ...dropdownItemStyle,
                                                    display: "flex",
                                                    alignItems: "center",
                                                }, onMouseOver: (e) => (e.currentTarget.style.backgroundColor =
                                                    dropdownItemHover.backgroundColor), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = "white"), onClick: () => alert("Change lang to EN"), children: [_jsx(Flag, { src: "https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png", alt: "en-flag" }), "English"] })] }))] })] })] })] }));
};
export default React.memo(Header);
