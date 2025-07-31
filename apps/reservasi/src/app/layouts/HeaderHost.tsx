"use client";

import { Header } from "@bnext/ui";
import { useLogout } from "../../hooks/useLogout";
import { getMe } from "@bnext/utils";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  branch: string;
  group: string;
  userId: string;
  status: string;
};

export const HeaderHost = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getMe();
        setCurrentUser(user);
      } catch (e) {
        console.error("Failed to fetch current user:", e);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = useLogout();

  return <Header onLogout={handleLogout} currentUser={currentUser} />;
};
