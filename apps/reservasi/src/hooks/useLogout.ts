// packages/ui/src/hooks/useLogout.ts
"use client";

import { actionLogout } from "@bnext/utils";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await actionLogout();
      router.push("/login"); // sesuaikan path login-mu
    } catch (e) {
      console.error("Logout error", e);
    }
  };

  return handleLogout;
};
