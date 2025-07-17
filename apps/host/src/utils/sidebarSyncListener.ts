type SidebarMessage = {
  type: "sidebar:openItems";
  payload: Record<string, boolean>;
};

export function listenSidebarOpenItems() {
  if (typeof window === "undefined") return;

  window.addEventListener("message", (event) => {
    const message = event.data as SidebarMessage;

    if (message.type === "sidebar:openItems" && message.payload) {
      localStorage.setItem("sidebarOpenItems", JSON.stringify(message.payload));
    }
  });
}
