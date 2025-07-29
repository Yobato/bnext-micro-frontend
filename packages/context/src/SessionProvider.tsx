"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../../utils/src/authService"; // pastikan ini mengarah ke helper yang benar

type User = {
  id: string;
  group: string;
  branch: string;
  name: string;
  userId: string;
  email: string;
  password: string;
  userDukcapil?: string;
  activateDate?: Date;
  status: string;
};

type SessionContextType = {
  user: User | null;
  loading: boolean;
};

export const SessionContext = createContext<SessionContextType>({
  user: null,
  loading: true,
});

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const user = await getMe();
        setUser(user);
      } catch (err) {
        console.warn("No session found or error fetching user", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ user, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
