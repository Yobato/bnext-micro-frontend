// zones/host/components/HeaderHost.tsx
"use client";

import { Header } from "@bnext/ui"; // Header dari shared
import { useLogout } from "../../hooks/useLogout";

export const HeaderHost = () => {
  const handleLogout = useLogout();

  return <Header onLogout={handleLogout} />;
};
