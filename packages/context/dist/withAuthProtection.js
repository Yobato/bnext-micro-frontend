"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useSession } from "./useSession";
import { redirectLogin } from "./RedirectLogin";
export function withAuthProtection(Component) {
    return function ProtectedComponent(props) {
        const { user, loading } = useSession();
        if (loading)
            return _jsx("div", { children: "Loading session..." });
        if (!user) {
            redirectLogin();
            return null;
        }
        return _jsx(Component, { ...props });
    };
}
