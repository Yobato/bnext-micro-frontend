"use client";

import { MenuGroup, MenuItem } from "@bnext/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SidebarMenuProps = {
  menu: MenuGroup[];
  currentZone: "cif" | "reservasi" | "settings";
};

const STORAGE_KEY = "sidebarOpenItems";
const FIRST_SESSION_KEY = "sidebarFirstSession";

const BASE_PATHS: Record<string, string> = {
  cif: "/cif",
  reservasi: "/reservasi",
  settings: "/settings",
};

const ZONE_ORIGINS: Record<string, string> = {
  cif: "http://cif.bnext.localhost:3002",
  reservasi: "http://reservasi.bnext.localhost:3001",
  settings: "http://settings.bnext.localhost:3003",
};

// Helper baca cookie
const readCookie = (key: string): string | null => {
  const cookies = document.cookie.split("; ").reduce((acc, pair) => {
    const [k, v] = pair.split("=");
    acc[k] = v;
    return acc;
  }, {} as Record<string, string>);
  return cookies[key] ? decodeURIComponent(cookies[key]) : null;
};

// Helper set cookie domain-shared
const writeCookie = (key: string, value: string) => {
  document.cookie = `${key}=${encodeURIComponent(
    value
  )}; path=/; domain=.bnext.localhost`;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menu, currentZone }) => {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  // Load cookie on mount
  useEffect(() => {
    const saved = readCookie(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    setOpenItems(parsed);
    setIsMounted(true);
    console.log("[Cookie] Loaded:", parsed);
  }, []);

  // Save to cookie
  useEffect(() => {
    if (!isMounted) return;
    writeCookie(STORAGE_KEY, JSON.stringify(openItems));
    console.log("[Cookie] Saved:", openItems);
  }, [openItems, isMounted]);

  // Auto-open active item on first session
  // Auto-open active item on first session
  useEffect(() => {
    if (!isMounted) return;

    const isFirst = readCookie(FIRST_SESSION_KEY) !== "false";
    if (!isFirst) return;

    const findOpenKey = (
      items: MenuItem[],
      labelPath: string[],
      groupTitle: string
    ): string | null => {
      for (const item of items) {
        const itemZone = (item as any).zone;
        if (itemZone !== currentZone) continue;

        const fullPath = BASE_PATHS[itemZone] + (item.href ?? "");
        const key = `${currentZone}>${groupTitle}>${[
          ...labelPath,
          item.label,
        ].join(">")}`;

        if (pathname === fullPath) return key;

        if (item.childMenu) {
          const result = findOpenKey(
            item.childMenu,
            [...labelPath, item.label],
            groupTitle
          );
          if (result) return result;
        }
      }
      return null;
    };

    let triggeredAutoOpen = false;
    for (const group of menu) {
      const key = findOpenKey(group.items, [], group.title);
      if (key && !openItems[key]) {
        const updated = { ...openItems, [key]: true };
        setOpenItems(updated);
        console.log("[AutoOpen] Activated:", key);
        triggeredAutoOpen = true;
        break; // cukup 1x auto-open
      }
    }

    if (triggeredAutoOpen) {
      writeCookie(FIRST_SESSION_KEY, "false");
    }
  }, [pathname, currentZone, menu, openItems, isMounted]);

  const toggleItem = (key: string) => {
    const updated = { ...openItems, [key]: !openItems[key] };
    setOpenItems(updated);
    console.log("[Toggle]", key, "→", updated[key]);
  };

  const isActive = (item: MenuItem) => {
    if (!item.href) return false;
    const itemZone = (item as any).zone;
    const basePath = BASE_PATHS[itemZone];
    const relativePath = pathname.replace(basePath, "") || "/";
    return relativePath === item.href && itemZone === currentZone;
  };

  const resolveFullHref = (item: MenuItem) => {
    const zone = (item as any).zone;
    const origin = ZONE_ORIGINS[zone];
    const base = BASE_PATHS[zone];
    return origin + base + item.href;
  };

  const renderItems = (
    items: MenuItem[],
    groupTitle: string,
    labelPath: string[] = []
  ): JSX.Element[] => {
    return items.map((item) => {
      const key = `${currentZone}>${groupTitle}>${[
        ...labelPath,
        item.label,
      ].join(">")}`;
      const isOpen = openItems[key] ?? false;
      const active = isActive(item);
      const hasChildren = !!item.childMenu?.length;
      const zone = (item as any).zone;

      const content = item.href ? (
        zone !== currentZone ? (
          <a href={resolveFullHref(item)} className="layout-menuitem-link">
            {item.icon && <i className={`layout-menuitem-icon ${item.icon}`} />}
            <span>{item.label}</span>
          </a>
        ) : (
          <Link
            href={item.href}
            className={`layout-menuitem-link ${active ? "active-route" : ""}`}
          >
            {item.icon && <i className={`layout-menuitem-icon ${item.icon}`} />}
            <span>{item.label}</span>
          </Link>
        )
      ) : (
        <a
          className="layout-menuitem-link"
          onClick={() => hasChildren && toggleItem(key)}
        >
          {item.icon && <i className={`layout-menuitem-icon ${item.icon}`} />}
          <span>{item.label}</span>
          {hasChildren && (
            <i
              className={`pi pi-fw pi-angle-down transition-transform duration-100 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </a>
      );

      return (
        <li key={key} className={active ? "active" : ""}>
          {content}
          {hasChildren && isMounted && (
            <ul
              className={`layout-submenu-list transition-submenu overflow-hidden ${
                isOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {renderItems(item.childMenu!, groupTitle, [
                ...labelPath,
                item.label,
              ])}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <>
      {menu.map((group, i) => (
        <li className="layout-root-menuitem" key={i}>
          <div className="layout-menuitem-root-text">{group.title}</div>
          <ul className="layout-menu">
            {renderItems(group.items, group.title)}
          </ul>
        </li>
      ))}
    </>
  );
};

export default SidebarMenu;
