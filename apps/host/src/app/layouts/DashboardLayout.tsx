import { Footer, menuRaw } from "@bnext/ui";
import { Header } from "@bnext/ui";
import { Sidebar } from "@bnext/ui";
import React from "react";
import SidebarMenu from "../components/Sidebar/SidebarMenu";
import { resolveMenu } from "@bnext/utils";
import { HeaderHost } from "./HeaderHost";

const menuHost = resolveMenu(menuRaw, "host");

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <SessionProvider>
    <div id="webScreen" className="layout-wrapper layout-static">
      {/* <Header onLogout={handleLogout}></Header> */}
      <HeaderHost />
      <div className="layout-sidebar">
        <Sidebar>
          <SidebarMenu menu={menuHost} currentZone="host" />
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
