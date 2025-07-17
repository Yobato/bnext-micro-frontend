"use client"
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { broadcastSidebarOpenItems } from "../../utils/sidebarMessenger";

const DashboardPage = () => {
  return (
    <>
      <div>DashboardPage</div>
      <button
        onClick={() =>
          broadcastSidebarOpenItems({
            "reservasi>Menu Utama>Submenu A": true,
            "reservasi>Menu Utama>Submenu B": false,
          })
        }
      >
        Broadcast Sidebar Items
      </button>
    </>
  );
};

export default DashboardPage;
