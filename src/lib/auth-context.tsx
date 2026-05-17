"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

export interface MockUser {
  name: string;
  email: string;
  joinedAt: string;
}

interface AuthContextType {
  user: MockUser | null;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);
const STORAGE_KEY = "lunora_user_v1";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, [user, hydrated]);

  const signIn = useCallback((email: string, name?: string) => {
    const displayName =
      name ?? email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    setUser({
      name: displayName,
      email,
      joinedAt: new Date().toISOString(),
    });
  }, []);

  const signOut = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
