"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
// import HeaderToggle from "./HeaderToggle";
import { useToast } from "@bnext/context";
import HeaderToggle from "./HeaderToggle";
const Header = () => {
    const profile = useRef(null);
    const language = useRef(null);
    const { globalOnSuccess } = useToast();
    const handleLogout = () => {
        globalOnSuccess("Otsukaresama Satriyo\nWasalamualaikum wr. wb.");
        setTimeout(() => {
            alert("Logging out...");
        }, 1000);
    };
    const profileItems = [
        {
            template: () => (_jsxs("span", { className: "pop-profile", children: [_jsxs("p", { className: "p-profile", children: [_jsx("b", { children: "Satriyo" }), _jsx("br", {}), "Admin", _jsx("br", {}), "001 - Jakarta"] }), _jsx("hr", {})] })),
        },
        {
            label: "Profile",
            items: [
                {
                    label: "Change Password",
                    icon: "pi pi-user-edit",
                    command: () => alert("Change Password clicked"),
                },
                {
                    label: "Logout",
                    icon: "pi pi-sign-out",
                    command: () => confirmDialog({
                        message: "Are you sure you want to logout?",
                        header: "Confirmation",
                        icon: "pi pi-exclamation-triangle",
                        defaultFocus: "reject",
                        acceptClassName: "p-button-danger",
                        acceptLabel: "Yes",
                        rejectLabel: "No",
                        accept: handleLogout,
                    }),
                },
            ],
        },
    ];
    const languageItems = [
        {
            label: "Bahasa Indonesia",
            icon: () => (_jsx("img", { alt: "id-flag", src: "https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png", className: "mr-2 flag flag-id", style: { width: "18px" } })),
            command: () => alert("Change lang to ID"),
        },
        {
            label: "English",
            icon: () => (_jsx("img", { alt: "en-flag", src: "https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png", className: "mr-2 flag flag-us", style: { width: "18px" } })),
            command: () => alert("Change lang to EN"),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ConfirmDialog, {}), _jsxs("div", { className: "layout-topbar", children: [_jsx("a", { href: "/home", className: "layout-topbar-logo", children: _jsx("img", { src: `${process.env.NEXT_PUBLIC_ASSET_URL}/layout/images/logo-bsi.png`, alt: "logo", width: 200, height: 100, style: { width: "auto", height: "3rem" } }) }), _jsx(HeaderToggle, {}), _jsxs("div", { className: "layout-menu-right", children: [_jsxs("p", { className: "p-topbar mr-3", children: ["Hello, ", _jsx("b", { children: "Satriyo" }), _jsx("br", {}), "Admin", _jsx("br", {}), "[ 001 - Jakarta ]"] }), _jsx("i", { className: "menu-right pi pi-bell mr-3 ml-3 p-link p-overlay-badge", children: _jsx(Badge, { value: 1, severity: "danger" }) }), _jsx(Menu, { model: profileItems, popup: true, ref: profile, id: "popup_profile_menu" }), _jsx("i", { className: "menu-right pi pi-user mr-3 ml-3 p-link", onClick: (e) => profile.current?.toggle(e) }), _jsx(Menu, { model: languageItems, popup: true, ref: language, id: "popup_lang_menu" }), _jsx("i", { className: "menu-right pi pi-globe mr-3 ml-3 p-link", onClick: (e) => language.current?.toggle(e), children: _jsx("span", { className: "language-label", children: " EN " }) })] })] })] }));
};
export default React.memo(Header);
