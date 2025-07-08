"use client";

import { MenuGroup, MenuItem } from "@bnext/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SidebarMenuProps = {
  menu: MenuGroup[];
  currentZone: "cif" | "reservasi" | "settings";
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menu, currentZone }) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current pathname:", pathname);
  }, [pathname]);

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleItem = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const findActiveHref = (items: MenuItem[]): string | null => {
    for (const item of items) {
      if (item.childMenu) {
        const found = findActiveHref(item.childMenu);
        if (found) return found;
      }

      if (item.href && pathname === item.href) return item.href;
    }
    return null;
  };

  const activeHref = findActiveHref(menu.flatMap((group) => group.items));
  const isActive = (item: MenuItem) => {
    if (!item.href) return false;
    const itemZone = (item as any).zone;
    return pathname === item.href && itemZone === currentZone;
  };

  const ZONE_ORIGINS = {
    cif: "http://localhost:3002",
    reservasi: "http://localhost:3001",
    settings: "http://localhost:3003",
  };

  const BASE_PATHS = {
    cif: "/cif",
    reservasi: "/reservasi",
    settings: "/settings",
  };

  const resolveFullHref = (item: MenuItem) => {
    const zone = (item as any).zone as keyof typeof ZONE_ORIGINS;
    const origin = ZONE_ORIGINS[zone] || window.location.origin;
    const base = BASE_PATHS[zone] || "";
    return origin + base + item.href;
  };

  const renderItems = (items: MenuItem[], depth = 0): JSX.Element[] => {
    return items.map((item, index) => {
      const key = `${item.label}-${depth}-${index}`;
      const hasChildren = !!item.childMenu?.length;
      const active = isActive(item);
      const itemZone = (item as any).zone;

      const shouldBeOpen = item.childMenu?.some((child) =>
        findActiveHref([child])
      );
      const open = openItems[key] !== undefined ? openItems[key] : shouldBeOpen;

      return (
        <li key={key} className={active ? "active" : ""}>
          {item.href ? (
            itemZone !== currentZone ? (
              <a
                href={resolveFullHref(item)}
                className="p-ripple clickable layout-menuitem-link"
              >
                {item.icon && (
                  <i className={`layout-menuitem-icon ${item.icon}`} />
                )}
                <span className="layout-menuitem-text">{item.label}</span>
              </a>
            ) : (
              <Link
                href={item.href}
                className={`p-ripple clickable layout-menuitem-link ${
                  active ? "active-route" : ""
                }`}
              >
                {item.icon && (
                  <i className={`layout-menuitem-icon ${item.icon}`}></i>
                )}
                <span className="layout-menuitem-text">{item.label}</span>
              </Link>
            )
          ) : (
            <a
              className="p-ripple layout-menuitem-link"
              onClick={() => hasChildren && toggleItem(key)}
            >
              {item.icon && (
                <i className={`layout-menuitem-icon ${item.icon}`}></i>
              )}
              <span className="layout-menuitem-text">{item.label}</span>
              {hasChildren && (
                <i
                  className={`pi pi-fw pi-angle-down layout-submenu-toggler transition-transform duration-100 ${
                    isMounted && open ? "rotate-180" : ""
                  }`}
                />
              )}
            </a>
          )}

          {hasChildren && (
            <ul
              className={`layout-submenu-list transition-submenu overflow-hidden ${
                open ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {renderItems(item.childMenu!, depth + 1)}
            </ul>
          )}
        </li>
      );
    });
  };

  useEffect(() => {
    const openParents = (
      items: MenuItem[],
      parentKeys: string[] = [],
      depth = 0
    ): string[] => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const key = `${item.label}-${depth}-${i}`;
        if (item.href && pathname === item.href) {
          return parentKeys;
        }
        if (item.childMenu) {
          const found = openParents(
            item.childMenu,
            [...parentKeys, key],
            depth + 1
          );
          if (found.length) return found;
        }
      }
      return [];
    };

    const parentKeysToOpen = openParents(menu.flatMap((g) => g.items));
    const newOpenItems: Record<string, boolean> = {};
    parentKeysToOpen.forEach((k) => {
      newOpenItems[k] = true;
    });
    setOpenItems((prev) => ({ ...prev, ...newOpenItems }));
  }, [pathname]);

  return (
    <>
      {menu.map((group, i) => (
        <li className="layout-root-menuitem" key={i}>
          <div className="layout-menuitem-root-text">{group.title}</div>
          <ul className="layout-menu">{renderItems(group.items)}</ul>
        </li>
      ))}
    </>
  );
};

export default SidebarMenu;
