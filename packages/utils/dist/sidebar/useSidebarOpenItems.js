'use client';
import { useCallback, useEffect, useState } from "react";
import { readSidebarStateFromCookie, saveSidebarStateToCookie, } from "./sidebarCookies";
export function useSidebarOpenItems(currentZone) {
    const [openItems, setOpenItems] = useState({});
    useEffect(() => {
        const initial = readSidebarStateFromCookie();
        setOpenItems(initial);
    }, []);
    const updateItem = useCallback((key, value) => {
        setOpenItems((prev) => {
            const updated = { ...prev, [key]: value };
            saveSidebarStateToCookie(updated);
            return updated;
        });
    }, []);
    return {
        openItems,
        updateItem,
    };
}
