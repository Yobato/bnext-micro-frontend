// @bnext/utils/src/sidebarCookie.ts
import Cookies from "js-cookie";
const COOKIE_KEY = "sidebar_state";
const COOKIE_DOMAIN = ".bnext.localhost";
export function saveSidebarStateToCookie(openItems) {
    try {
        const encoded = encodeURIComponent(JSON.stringify(openItems));
        Cookies.set(COOKIE_KEY, encoded, {
            path: "/",
            domain: COOKIE_DOMAIN,
        });
    }
    catch (err) {
        console.error("Failed to save sidebar state to cookie", err);
    }
}
export function readSidebarStateFromCookie() {
    try {
        const raw = Cookies.get(COOKIE_KEY);
        if (!raw)
            return {};
        return JSON.parse(decodeURIComponent(raw));
    }
    catch (err) {
        console.error("Failed to read sidebar state from cookie", err);
        return {};
    }
}
