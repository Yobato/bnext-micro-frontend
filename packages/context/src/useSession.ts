// packages/context/useSession.ts
import { useContext } from "react";
import { SessionContext } from "./SessionProvider";

export const useSession = () => useContext(SessionContext);
