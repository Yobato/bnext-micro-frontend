// import "@bnext/ui/src/styles/layout/layout.scss";
// import "@bnext/ui/src/styles/demo/Demos.scss";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { PrimeReactProvider } from "primereact/api";
import { LayoutProvider } from "@bnext/context";
import { ToastContextProvider } from "@bnext/context";
// import "@bnext/ui/src/styles/lara-light-indigo/theme.css";
import "@bnext/ui/dist/styles.css";
import { default as DashboardLayout } from "../app/layouts/DashboardLayout";

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
