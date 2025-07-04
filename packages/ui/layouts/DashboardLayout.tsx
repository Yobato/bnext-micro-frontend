import Footer from "@bnext/ui/components/Footer";
import Header from "@bnext/ui/components/HeaderRefactor";
import Sidebar from "@bnext/ui/components/Sidebar";
import React from "react";
// import { SessionProvider } from "@bnext/context";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        // <SessionProvider>
            <div id='webScreen' className="layout-wrapper layout-static">
                <Header></Header>
                <div className="layout-sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">
                        {children}
                    </div>
                </div>
                <div className="layout-footer-fixed">
                    <Footer />
                </div>
                <div className="layout-mask"></div>
            </div>
        // </SessionProvider>
    )
};

export default DashboardLayout;