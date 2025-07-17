"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { useLayout } from "@bnext/context";
const HeaderToggle = React.memo(() => {
    const { setMobile, setIsSidebar } = useLayout();
    const [currentTime, setCurrentTime] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const onMenuToggle = () => {
        console.log("Toggled!");
        if (isDesktop())
            setIsSidebar((prev) => !prev);
        else
            setMobile((prev) => !prev);
    };
    useEffect(() => {
        setIsClient(true);
        setCurrentTime(new Date());
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const isDesktop = () => {
        return window.innerWidth > 991;
    };
    const formatDateTime = (date) => {
        const today = date.toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${today} ${hours}:${minutes}:${seconds}`;
    };
    return (_jsx("div", { className: "layout-menu-button", children: _jsxs("div", { className: "grid-me", children: [_jsx("button", { type: "button", className: "p-link layout-topbar-button", title: "button", onClick: onMenuToggle, children: _jsx("i", { className: "pi pi-bars" }) }), isClient && currentTime && (_jsx("p", { className: "p-topbar-toogle", children: formatDateTime(currentTime) }))] }) }));
});
export default HeaderToggle;
