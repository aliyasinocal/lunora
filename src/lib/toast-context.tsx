"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Check, X } from "lucide-react";
import { cn } from "@/lib/format";

type ToastType = "cart" | "favorite" | "success" | "info";

interface ToastInput {
  type?: ToastType;
  title: string;
  description?: string;
  image?: string;
  duration?: number;
}

interface Toast extends ToastInput {
  id: number;
}

interface ToastContextType {
  showToast: (toast: ToastInput) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

let toastIdCounter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: ToastInput) => {
    const id = ++toastIdCounter;
    setToasts((prev) => [...prev, { id, type: "info", duration: 3500, ...toast }]);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-24 right-5 z-50 flex flex-col gap-2 pointer-events-none w-[min(360px,calc(100vw-2.5rem))]">
        {toasts.map((t) => (
          <ToastCard key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastCard({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 10);
    const t2 = setTimeout(() => setShow(false), toast.duration! - 300);
    const t3 = setTimeout(onDismiss, toast.duration!);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [toast.duration, onDismiss]);

  const Icon =
    toast.type === "cart" ? ShoppingBag : toast.type === "favorite" ? Heart : Check;

  const accent =
    toast.type === "favorite"
      ? "text-gold"
      : toast.type === "cart"
      ? "text-gold"
      : "text-gold";

  return (
    <div
      className={cn(
        "pointer-events-auto bg-sand-soft border border-ink/10 shadow-2xl flex items-stretch overflow-hidden transition-all duration-300",
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      {toast.image && (
        <div className="relative w-16 h-16 flex-shrink-0 bg-sand-deep">
          <Image src={toast.image} alt="" fill sizes="64px" className="object-cover" />
        </div>
      )}
      <div className="flex-1 px-4 py-3 flex items-start gap-3 min-w-0">
        <Icon size={16} className={cn("mt-0.5 flex-shrink-0", accent)} />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-wider-2 text-ink/55">
            {toast.title}
          </div>
          {toast.description && (
            <div className="font-serif text-sm text-ink truncate mt-0.5">
              {toast.description}
            </div>
          )}
          {toast.type === "cart" && (
            <Link
              href="/sepet"
              className="text-[10px] uppercase tracking-wider-2 text-gold hover:text-ink transition inline-block mt-1.5"
            >
              Sepete Git →
            </Link>
          )}
        </div>
        <button
          onClick={onDismiss}
          className="text-ink/30 hover:text-ink transition flex-shrink-0"
          aria-label="Kapat"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
