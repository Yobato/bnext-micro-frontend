"use client";

import { useEffect } from "react";
import { setupSidebarListener } from "../utils/sidebarSyncListener";

export default function SidebarListenerClient() {
  useEffect(() => {
    const cleanup = setupSidebarListener();
    return cleanup;
  }, []);

  return null;
}
