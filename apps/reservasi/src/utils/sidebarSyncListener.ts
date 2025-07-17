export const SIDEBAR_MESSAGE_KEY = "bnext-sidebar-update";
export const SIDEBAR_STORAGE_KEY = "bnext.sidebarOpenItems";

type SidebarMessage = {
  type: "SIDEBAR_UPDATE";
  payload: Record<string, boolean>;
};

export function setupSidebarListener() {
  if (typeof window === "undefined") return;

  const handler = (event: MessageEvent) => {
    if (event.origin !== "http://host.bnext.localhost:3000") return;
    const { data } = event;

    try {
      const message = data as SidebarMessage;

      if (message?.type === "SIDEBAR_UPDATE" && message?.payload) {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(message.payload));
        console.log("[Child Zone] Sidebar state updated from host:", message.payload);
      }
    } catch (error) {
      console.error("Failed to handle sidebar message:", error);
    }
  };

  window.addEventListener("message", handler);

  return () => {
    window.removeEventListener("message", handler);
  };
}
