"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import Image from "next/image";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Ripple } from "primereact/ripple";
import { useEffect } from "react";
import "@bnext/ui/src/styles/button/button.scss";
// import "@/styles/button/button.scss";
const FormLogin = () => {
    useEffect(() => {
        document.body.classList.add("login");
        return () => {
            document.body.classList.remove("login");
        };
    }, []);
    const navigateToZone = (path) => {
        window.location.href = path;
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "login-page", children: [_jsxs("div", { className: "title", children: [_jsx("div", { children: _jsx("img", { src: "/layout/images/bnext.png", className: "sublogo", alt: "bnext", width: 50, height: 45 }) }), _jsx("img", { src: "/layout/images/ldap.png", className: "ldap", alt: "lock-screen", width: 50, height: 55 })] }), _jsx("div", { children: _jsxs("form", { 
                        //   onSubmit={validateLogin}
                        onSubmit: (e) => {
                            e.preventDefault();
                            navigateToZone("/reservasi");
                        }, children: [_jsxs(FloatLabel, { className: "mt-3 mb-6", children: [_jsx(InputText, { id: "userId", keyfilter: "email", className: "field-login w-full", tabIndex: 1, autoComplete: "off" }), _jsx("label", { htmlFor: "userId", children: "User Id" })] }), _jsxs(FloatLabel, { className: "pass-me mb-6 w-full", children: [_jsx(Password, { inputId: "password", inputClassName: "field-login w-full", feedback: false, tabIndex: 2, toggleMask: true, autoComplete: "off" }), _jsx("label", { htmlFor: "password", children: "Password" })] }), _jsx("center", { children: _jsx(Button, { label: "Login", icon: "pi pi-key", className: "btn-login bg-green p-ripple", tabIndex: 3, 
                                    // loading={loading}
                                    disabled: false, children: _jsx(Ripple, {}) }) })] }) })] }) }));
};
export default FormLogin;
