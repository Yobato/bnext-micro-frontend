import type { MenuGroup, MenuItem } from "@bnext/types/menu";

export const BASE_PATHS: Record<string, string> = {
  cif: "/cif",
  reservasi: "/reservasi",
  settings: "/settings",
  host: "",
};

export function resolveMenu(
    menuRaw: MenuGroup[],
    currentZone: string
  ): MenuGroup[] {
    const currentBasePath = BASE_PATHS[currentZone];
  
    const resolveItem = (item: any): MenuItem => {
      if (item.childMenu && Array.isArray(item.childMenu)) {
        return {
          ...item,
          childMenu: item.childMenu.map(resolveItem),
        };
      }
  
      let finalPath = item.path || "";

      if(finalPath.includes("{host}")){
        finalPath = finalPath.replace("{host}", ""); // host = root
      }
  
      // Replace {zone}
      if (finalPath.includes("{")) {
        finalPath = finalPath.replace(/\{(\w+)\}/g, (_, zoneKey) => {
          return BASE_PATHS[zoneKey] || `{${zoneKey}}`;
        });
      }
  
      // Ambil zonenya
      const zoneMatch = finalPath.match(/^\/(cif|reservasi|settings)(\/|$)/);
      const itemZone = zoneMatch?.[1] ?? "host";
  
      const relativePath = finalPath.replace(BASE_PATHS[itemZone], "") || "/";
  
      return {
        ...item,
        href: relativePath,
        zone: itemZone,
        // external: item.external ?? false
      };
    };
  
    return menuRaw.map((group) => ({
      ...group,
      items: group.items.map(resolveItem),
    }));
  }
  
  
