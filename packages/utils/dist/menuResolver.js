export const BASE_PATHS = {
    cif: "/cif",
    reservasi: "/reservasi",
    settings: "/settings",
};
export function resolveMenu(menuRaw, currentZone) {
    const currentBasePath = BASE_PATHS[currentZone];
    const resolveItem = (item) => {
        if (item.childMenu && Array.isArray(item.childMenu)) {
            return {
                ...item,
                childMenu: item.childMenu.map(resolveItem),
            };
        }
        let finalPath = item.path || "";
        // Replace {zone}
        if (finalPath.includes("{")) {
            finalPath = finalPath.replace(/\{(\w+)\}/g, (_, zoneKey) => {
                return BASE_PATHS[zoneKey] || `{${zoneKey}}`;
            });
        }
        // Ambil zonenya
        const zoneMatch = finalPath.match(/^\/(cif|reservasi|settings)(\/|$)/);
        const itemZone = zoneMatch?.[1] ?? currentZone;
        const relativePath = finalPath.replace(BASE_PATHS[itemZone], "") || "/";
        return {
            ...item,
            href: relativePath,
            zone: itemZone,
        };
    };
    return menuRaw.map((group) => ({
        ...group,
        items: group.items.map(resolveItem),
    }));
}
