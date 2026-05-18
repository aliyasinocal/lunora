"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

interface RecentlyViewedContextType {
  recent: string[];
  add: (productId: string) => void;
  clear: () => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | null>(null);
const STORAGE_KEY = "lunora_recent_v1";
const MAX_RECENT = 6;

export function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
  const [recent, setRecent] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setRecent(JSON.parse(stored));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
    } catch {}
  }, [recent, hydrated]);

  const add = useCallback((productId: string) => {
    setRecent((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, MAX_RECENT);
    });
  }, []);

  const clear = useCallback(() => setRecent([]), []);

  return (
    <RecentlyViewedContext.Provider value={{ recent, add, clear }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) throw new Error("useRecentlyViewed must be used within RecentlyViewedProvider");
  return ctx;
}
