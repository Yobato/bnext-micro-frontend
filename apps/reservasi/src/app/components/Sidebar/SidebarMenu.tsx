"use client";

import { MenuGroup, MenuItem } from "@bnext/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SidebarMenuProps = {
  menu: MenuGroup[];
  currentZone: "host" | "cif" | "reservasi" | "settings";
};

const BASE_PATHS = {
  host: "/dashboard",
  cif: "/cif",
  reservasi: "/reservasi",
  settings: "/settings",
} as const;

const ZONE_ORIGINS = {
  host: "http://host.bnext.localhost:3000",
  cif: "http://cif.bnext.localhost:3002",
  reservasi: "http://reservasi.bnext.localhost:3001",
  settings: "http://settings.bnext.localhost:3003",
} as const;

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menu, currentZone }) => {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // --- Open auto item jika match current pathname ---
  useEffect(() => {
    const matchAndOpen = () => {
      const updated = { ...openItems };
      let foundMatch = false;

      for (const group of menu) {
        const key = findMatchKey(group.items, [], group.title);
        if (key && !updated[key]) {
          updated[key] = true;
          foundMatch = true;
          break;
        }
      }

      if (foundMatch) {
        setOpenItems(updated);
      }
    };

    const findMatchKey = (
      items: MenuItem[],
      labelPath: string[],
      groupTitle: string
    ): string | null => {
      for (const item of items) {
        const zone = (item as any).zone;
        if (zone !== currentZone) continue;

        const fullPath = BASE_PATHS[zone] + (item.href ?? "");
        const key = getItemKey(groupTitle, labelPath, item.label);

        if (pathname === fullPath) return key;

        if (item.childMenu) {
          const result = findMatchKey(
            item.childMenu,
            [...labelPath, item.label],
            groupTitle
          );
          if (result) return result;
        }
      }
      return null;
    };

    matchAndOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentZone, menu]);

  const getItemKey = (groupTitle: string, labelPath: string[], label: string) =>
    `${currentZone}>${groupTitle}>${[...labelPath, label].join(">")}`;

  const toggleItem = (key: string) => {
    const updated = {
      ...openItems,
      [key]: !openItems[key],
    };
    setOpenItems(updated);
  };

  const isActive = (item: MenuItem) => {
    if (!item.href) return false;
    const zone = (item as any).zone;
    const base = BASE_PATHS[zone];
    const relativePath = pathname.replace(base, "") || "/";
    return relativePath === item.href && zone === currentZone;
  };

  const resolveHref = (item: MenuItem) => {
    const zone = (item as any).zone;
    return `${ZONE_ORIGINS[zone]}${BASE_PATHS[zone]}${item.href}`;
  };

  const renderItems = (
    items: MenuItem[],
    groupTitle: string,
    path: string[] = []
  ): JSX.Element[] =>
    items.map((item) => {
      const key = getItemKey(groupTitle, path, item.label);
      const isOpen = openItems[key] ?? false;
      const active = isActive(item);
      const hasChildren = !!item.childMenu?.length;
      const zone = (item as any).zone;

      const content = item.href ? (
        zone !== currentZone ? (
          <a href={resolveHref(item)} className="layout-menuitem-link">
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
          {hasChildren && (
            <ul
              className={`layout-submenu-list transition-submenu overflow-hidden ${
                isOpen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {renderItems(item.childMenu!, groupTitle, [...path, item.label])}
            </ul>
          )}
        </li>
      );
    });

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
