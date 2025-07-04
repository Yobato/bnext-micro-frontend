"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  getUserInfo,
  getSession,
  updateSession,
  clearSession,
  setSession,
} from "@bnext/utils/encrypted";
import { actionLogout } from "@bnext/utils/authService";

type SessionContextType = {
  DataUser: any;
  // updateUserSession: () => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);
interface Menu {
  [key: string]: string;
}
interface MenuItem {
  id: string;
  path: string;
  menu: Menu[];
}
interface MenuFolder {
  id: string;
  menuGroupId: string;
  name: string;
  menuFolder: MenuItem[];
}

interface MenuGroup {
  id: string;
  name: string;
  menuGroup: MenuFolder[];
}

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [DataUser] = useState<any>(getUserInfo());
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const currentData = getUserInfo();
  const currentSession = getSession();
  const [menus, setMenus] = useState<any>(() => {
    if (typeof window === "undefined") return null;
    const res = localStorage.getItem("Menu") || null;
    if (!res) return null;
    const dataMenus = JSON.parse(res);
    return dataMenus;
  });

  const getAllowedMenus = (menuGroups: MenuGroup[]): Menu[] => {
    if (!Array.isArray(menuGroups) || menuGroups.length === 0) return [];

    return menuGroups[0].menuGroup.flatMap((folder) =>
      folder.menuFolder.flatMap((menuItem) => {
        // Ambil menu jika tersedia dan memiliki path
        if (Array.isArray(menuItem.menu)) {
          return menuItem.menu.filter(
            (menu): menu is Menu => typeof menu.path === "string"
          );
        }

        // Atau fallback ke menuItem.path jika tidak ada array menu
        if (typeof menuItem.path === "string") {
          return [{ path: menuItem.path }];
        }

        return [];
      })
    );
  };
  

  useEffect(() => {
    setIsClient(true);

    const allowedMenus = getAllowedMenus(menus);
    const a = allowedMenus.some(
      (menu) => menu.path === pathname.replace(/^\//, "")
    );

    // tidak semua user punya reservasi
    if (
      pathname === "/home" ||
      pathname === "/home/reservasi" ||
      pathname === "/"
    ) {
      // allow
    } else if (!a) {
      router.push("/access-denied");
    }

    if (
      !currentData ||
      (currentData == null && !currentSession) ||
      currentSession == null
    ) {
      clearSession();
      router.push("/");
      DataUser != null ? actionLogout(DataUser[0].userId) : "";
    } else {
      updateSession();
    }

    if (pathname === "/") {
      if (currentData != null && currentSession != null) {
        router.push("/home");
      } else {
        router.push("/");
      }
    }

    // setSession();
  }, [pathname, router]);
  

  if (!isClient) {
    return null;
  }

  const logout = () => {
    actionLogout(DataUser != null ? DataUser[0].userId : "");
    clearSession();
    router.push("/");
  };

  return (
    <SessionContext.Provider value={{ DataUser, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
