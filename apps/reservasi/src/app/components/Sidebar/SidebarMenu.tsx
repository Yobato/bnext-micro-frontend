"use client";

import { group } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

type MenuItem = {
  label: string;
  icon?: string;
  href?: string;
  childMenu?: MenuItem[];
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

type SidebarMenuProps = {
  menu: MenuGroup[];
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menu }) => {
  //   const nodeRef = useRef(null);
  const pathname = usePathname();
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

  const isActive = (href?: string) => {
    return href === activeHref;
  };

  const renderItems = (items: MenuItem[], depth = 0): JSX.Element[] => {
    return items.map((item, index) => {
      const key = `${item.label}-${depth}-${index}`;
      const hasChildren = !!item.childMenu?.length;
      const active = isActive(item.href);

      // Auto open submenu if it contains the active route
      const shouldBeOpen = item.childMenu?.some((child) =>
        findActiveHref([child])
      );

      const open = openItems[key] !== undefined ? openItems[key] : shouldBeOpen;

      return (
        <li key={key} className={active ? "active" : ""}>
          {item.href ? (
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
      {menu.map((group, i) => {
        return (
          <li className="layout-root-menuitem" key={i}>
            <div className="layout-menuitem-root-text">{group.title}</div>
            <ul className="layout-menu">{renderItems(group.items)}</ul>
          </li>
        );
      })}
    </>
  );
};

export default SidebarMenu;
