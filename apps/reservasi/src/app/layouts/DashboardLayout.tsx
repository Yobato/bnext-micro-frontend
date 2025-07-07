import { Footer } from "@bnext/ui";
import { Header } from "@bnext/ui";
import { Sidebar } from "@bnext/ui";
import Link from "next/link";
import React from "react";
import SidebarMenu from "../components/Sidebar/SidebarMenu";
// import { SessionProvider } from "@bnext/context";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <SessionProvider>
    <div id="webScreen" className="layout-wrapper layout-static">
      <Header></Header>
      <div className="layout-sidebar">
        <Sidebar>
          <SidebarMenu
            menu={[
              {
                title: "Home",
                items: [
                  { label: "Dashboard", icon: "pi pi-fw pi-home", href: "/" },
                  {
                    label: "Reservasi",
                    icon: "pi pi-fw pi-book",
                    href: "/home",
                  },
                ],
              },
              {
                title: "Features",
                items: [
                  {
                    label: "Pengaturan",
                    icon: "pi pi-fw pi-cog",
                    childMenu: [
                      {
                        label: "Akun",
                        icon: "pi pi-user",
                        href: "/cif",
                      },
                      {
                        label: "Tema",
                        icon: "pi pi-palette",
                        href: "/settings/theme",
                      },
                    ],
                  },
                ],
              },
            ]}
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
