'use client';
import { useCallback, useEffect, useState } from "react";
import {
  readSidebarStateFromCookie,
  saveSidebarStateToCookie,
} from "./sidebarCookies";

export function useSidebarOpenItems(currentZone: string) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initial = readSidebarStateFromCookie();
    setOpenItems(initial);
  }, []);

  const updateItem = useCallback((key: string, value: boolean) => {
    setOpenItems((prev) => {
      const updated = { ...prev, [key]: value };
      saveSidebarStateToCookie(updated);
      return updated;
    });
  }, []);

  return {
    openItems,
    updateItem,
  };
}
