// @bnext/ui/hooks/useSidebarCookieState.ts
"use client";
import { useEffect, useState } from "react";
import { readSidebarStateFromCookie, saveSidebarStateToCookie, } from "./sidebarCookies";
export function useSidebarCookieState() {
    const [openItems, setOpenItems] = useState({});
    useEffect(() => {
        const loaded = readSidebarStateFromCookie();
        setOpenItems(loaded);
    }, []);
    const toggleItem = (key) => {
        const updated = { ...openItems, [key]: !openItems[key] };
        setOpenItems(updated);
        saveSidebarStateToCookie(updated);
    };
    return {
        openItems,
        toggleItem,
    };
}
