import { Footer, menuRaw } from "@bnext/ui";
import { Sidebar } from "@bnext/ui";
// import Link from "next/link";
import React from "react";
import SidebarMenu from "../components/Sidebar/SidebarMenu";
import { resolveMenu } from "@bnext/utils";
import { HeaderHost } from "./HeaderHost";
// import { SessionProvider } from "@bnext/context";

const menuReservasi = resolveMenu(menuRaw, "reservasi");

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <SessionProvider>
    <div id="webScreen" className="layout-wrapper layout-static">
      <HeaderHost></HeaderHost>
      <div className="layout-sidebar">
        <Sidebar>
          <SidebarMenu menu={menuReservasi} currentZone="reservasi" />
        </Sidebar>
      </div>
      <div className="layout-main-container">
        <div className="layout-main">{children}</div>
      </div>
      <div className="layout-footer-fixed">
        <Footer />
      </div>
      <div className="layout-mask"></div>
    </div>
    // </SessionProvider>
  );
};

export default DashboardLayout;
