import { Footer, menuRaw } from "@bnext/ui";
import { Header } from "@bnext/ui";
import { Sidebar } from "@bnext/ui";
import Link from "next/link";
import React from "react";
import SidebarMenu from "../components/Sidebar/SidebarMenu";
import { resolveMenu } from "@bnext/utils" 
// import { SessionProvider } from "@bnext/context";

const menuCif = resolveMenu(menuRaw, "cif");

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <SessionProvider>
    <div id="webScreen" className="layout-wrapper layout-static">
      <Header></Header>
      <div className="layout-sidebar">
        <Sidebar>
          <SidebarMenu
            menu={menuCif} currentZone="cif"
          />
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
