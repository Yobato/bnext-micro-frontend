// @bnext/utils/src/sidebarStorage.ts
const SIDEBAR_STORAGE_KEY = "bnext:sidebar-openItems";
// Tipe: { [key: string]: boolean }
// Contoh: { "reservasi>Menu Title>Submenu": true, ... }
export function getGlobalSidebarState() {
    try {
        const raw = localStorage.getItem(SIDEBAR_STORAGE_KEY);
        if (!raw)
            return {};
        return JSON.parse(raw);
    }
    catch (error) {
        console.warn("Gagal membaca sidebar state:", error);
        return {};
    }
}
export function setGlobalSidebarState(state) {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem(SIDEBAR_STORAGE_KEY, serialized);
    }
    catch (error) {
        console.warn("Gagal menyimpan sidebar state:", error);
    }
}
