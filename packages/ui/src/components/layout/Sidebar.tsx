"use client";
import { useLayout } from "@bnext/context";
import React, { useEffect } from "react";

type SidebarProps = {
  children?: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { isSidebar, isMobile, setMobile } = useLayout();

  useEffect(() => {
    const sidebarEl = document.getElementById("webScreen");
    if (!sidebarEl) return;

    const isDesktop = () => window.innerWidth > 991;

    // Update tampilan sidebar saat lebar layar berubah
    const updateSidebarState = () => {
      if (!sidebarEl) return;

      if (!isDesktop()) {
        if (isMobile) {
          document.body.classList.add("blocked-scroll");
          sidebarEl.classList.add("layout-mobile-active");
        } else {
          document.body.classList.remove("blocked-scroll");
          sidebarEl.classList.remove("layout-mobile-active");
        }
      } else {
        setMobile(false); // pastikan mobile tidak aktif di desktop
        sidebarEl.className =
          "layout-wrapper layout-static " +
          (!isSidebar ? "layout-static-inactive" : "");
      }
    };

    // Listener untuk menutup sidebar saat klik elemen tertentu (hanya di mobile)
    const handleSidebarClose = () => {
      setMobile(false);
      document.body.classList.remove("blocked-scroll");
      sidebarEl.classList.remove("layout-mobile-active");
    };

    const attachCloseEvents = () => {
      if (!isDesktop()) {
        const elements = [
          ...document.querySelectorAll(
            "a.clickable, span.close-menu, .layout-mask"
          ),
        ];

        elements.forEach((el) => {
          el.addEventListener("click", handleSidebarClose);
        });

        return () => {
          elements.forEach((el) => {
            el.removeEventListener("click", handleSidebarClose);
          });
        };
      }
      return () => {}; // no-op cleanup untuk desktop
    };

    updateSidebarState();
    const cleanupEvents = attachCloseEvents();

    window.addEventListener("resize", updateSidebarState);

    return () => {
      window.removeEventListener("resize", updateSidebarState);
      cleanupEvents(); // bersihkan event listener click
    };
  }, [isSidebar, isMobile, setMobile]);

  return (
    <>
      <div className="layout-menu-header hide">
        <span className="close-menu">
          <i className="pi pi-times"></i>
        </span>
      </div>
      <ul className="layout-menu" id="sideBarBox">
        {children}
      </ul>
    </>
  );
};

export default Sidebar;
