"use client";

import React from "react";
import { SessionProvider, withAuthProtection } from "@bnext/context";
import DashboardLayout from "../layouts/DashboardLayout";

function InnerLayout({ children }: { children: React.ReactNode }) {
  const ProtectedChildren = withAuthProtection(() => <>{children}</>);
  return <ProtectedChildren />;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <DashboardLayout>
        <InnerLayout>{children}</InnerLayout>
      </DashboardLayout>
    </SessionProvider>
  );
}
