"use client";

import { useEffect } from "react";
import { listenSidebarOpenItems } from "../utils/sidebarSyncListener";

export default function SidebarListenerClient() {
  useEffect(() => {
    listenSidebarOpenItems();
  }, []);

  return null;
}
