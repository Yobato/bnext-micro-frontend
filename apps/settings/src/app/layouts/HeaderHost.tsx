"use client";

import { Header } from "@bnext/ui";
import { useLogout } from "../../hooks/useLogout";

export const HeaderHost = () => {
  const handleLogout = useLogout();

  return <Header onLogout={handleLogout} />;
};
