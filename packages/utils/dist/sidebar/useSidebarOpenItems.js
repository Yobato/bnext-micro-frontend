'use client';
import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie"; // pastikan js-cookie sudah diinstall
const COOKIE_KEY_PREFIX = "sidebarOpenItems";
export function useSidebarOpenItems(zone) {
    const cookieKey = `${COOKIE_KEY_PREFIX}-${zone}`;
    const [openItems, setOpenItems] = useState({});
    // Baca dari cookie saat mount
    useEffect(() => {
        try {
            const cookieValue = Cookies.get(cookieKey);
            if (cookieValue) {
                const parsed = JSON.parse(cookieValue);
                if (typeof parsed === "object" && parsed !== null) {
                    setOpenItems(parsed);
                }
            }
        }
        catch (err) {
            console.error("❌ Failed to parse sidebar cookie:", err);
        }
    }, [cookieKey]);
    // Fungsi update yang juga sync ke cookie
    const updateItem = useCallback((key, value) => {
        setOpenItems((prev) => {
            const updated = { ...prev, [key]: value };
            Cookies.set(cookieKey, JSON.stringify(updated), {
                path: "/", // agar bisa dibaca di semua path
                domain: ".bnext.localhost", // penting: agar terbaca lintas zona
            });
            return updated;
        });
    }, [cookieKey]);
    return {
        openItems,
        updateItem,
    };
}
