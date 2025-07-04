import "@bnext/ui/styles/layout/layout.scss";
import "@bnext/ui/styles/demo/Demos.scss";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { PrimeReactProvider } from "primereact/api";
import { LayoutProvider } from "@bnext/context";
import { ToastContextProvider } from "@bnext/context";
import "@bnext/ui/styles/lara-light-indigo/theme.css";
import { default as DashboardLayout } from "@bnext/ui/layouts/DashboardLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>
          <ToastContextProvider>
            <PrimeReactProvider>
              <DashboardLayout>{children}</DashboardLayout>
            </PrimeReactProvider>
          </ToastContextProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
