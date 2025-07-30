import { Footer, menuRaw } from "@bnext/ui";
import { Sidebar } from "@bnext/ui";
import React from "react";
import SidebarMenu from "../components/Sidebar/SidebarMenu";
import { resolveMenu } from "@bnext/utils";
import { HeaderHost } from "./HeaderHost";

const menuSettings = resolveMenu(menuRaw, "settings");

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="webScreen" className="layout-wrapper layout-static">
      <HeaderHost></HeaderHost>
      <div className="layout-sidebar">
        <Sidebar>
          <SidebarMenu menu={menuSettings} currentZone="settings" />
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
  );
};

export default DashboardLayout;
