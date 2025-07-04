'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
const ContextMenu = createContext(undefined);
const LayoutContext = createContext(undefined);
export const LayoutProvider = ({ children }) => {
    const [currentMenu, setCurrentMenu] = useState('');
    const [isSidebar, setIsSidebar] = useState(true);
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        const strSide = localStorage.getItem("isSidebar");
        strSide && setIsSidebar(JSON.parse(strSide));
    }, []);
    const value = useMemo(() => ({ isSidebar, setIsSidebar, isMobile, setMobile }), [isSidebar, setIsSidebar, isMobile, setMobile]);
    return (_jsx(LayoutContext.Provider, { value: value, children: _jsx(ContextMenu.Provider, { value: { currentMenu, setCurrentMenu }, children: children }) }));
};
export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useUser must be used within an ContextMenuProvider');
    }
    return context;
};
export const useMenu = () => {
    const context = useContext(ContextMenu);
    if (!context) {
        throw new Error('useMenu must be used within an ContextMenuProvider');
    }
    return context;
};
