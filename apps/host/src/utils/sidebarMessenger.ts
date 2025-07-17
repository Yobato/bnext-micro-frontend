// apps/host/src/utils/sidebarMessenger.ts
import {
  SIDEBAR_MESSAGE_KEY,
  SIDEBAR_STORAGE_KEY,
  type SidebarMessage,
} from "@bnext/utils";

export function broadcastSidebarOpenItems(openItems: Record<string, boolean>) {
  const message: SidebarMessage = {
    type: "SIDEBAR_UPDATE",
    payload: openItems,
  };

  const iframeWindows = Array.from(document.querySelectorAll("iframe"))
    .map((iframe) => iframe.contentWindow)
    .filter(Boolean) as Window[];
    
    
    iframeWindows.forEach((win) => {
        win.postMessage({ key: SIDEBAR_MESSAGE_KEY, ...message }, "*");
    });
    console.log("Broadcasting to iframes:", iframeWindows.length, message);
}
