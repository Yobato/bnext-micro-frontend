"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../../utils/src/authService"; // pastikan ini mengarah ke helper yang benar
export const SessionContext = createContext({
    user: null,
    loading: true,
});
export const SessionProvider = ({ children, }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchSession = async () => {
            try {
                const user = await getMe();
                setUser(user);
            }
            catch (err) {
                console.warn("No session found or error fetching user", err);
                setUser(null);
            }
            finally {
                setLoading(false);
            }
        };
        fetchSession();
    }, []);
    return (_jsx(SessionContext.Provider, { value: { user, loading }, children: children }));
};
export const useSession = () => useContext(SessionContext);
