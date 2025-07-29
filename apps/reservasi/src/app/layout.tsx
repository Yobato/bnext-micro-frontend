"use client";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "@bnext/ui/dist/styles.css";

import { PrimeReactProvider } from "primereact/api";
import {
  LayoutProvider,
  ToastContextProvider,
  SessionProvider,
} from "@bnext/context";
import DashboardLayout from "apps/reservasi/src/app/layouts/DashboardLayout";

import { withAuthProtection } from "@bnext/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Protected = withAuthProtection(() => <>{children}</>);

  return (
    <html lang="en">
      <body>
        <LayoutProvider>
          <ToastContextProvider>
            <PrimeReactProvider>
              <SessionProvider>
                <DashboardLayout>
                  <Protected />
                </DashboardLayout>
              </SessionProvider>
            </PrimeReactProvider>
          </ToastContextProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
