"use client";

import { setAuthState } from "@/lib/authSlice";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ClientSessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}): React.ReactNode {
  const dispatch = useDispatch();

  // Dispatch action to set authenticated state when session data changes
  useEffect(() => {
    if (session) {
      dispatch(setAuthState(true));
    } else {
      dispatch(setAuthState(false));
    }
  }, [session, dispatch]);

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
