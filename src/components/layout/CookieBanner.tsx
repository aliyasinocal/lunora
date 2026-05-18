"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MoonIcon from "../ui/MoonIcon";

const STORAGE_KEY = "lunora_cookie_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  const accept = (kind: "all" | "necessary") => {
    try {
      localStorage.setItem(STORAGE_KEY, kind);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 md:bottom-5 z-40 md:max-w-md bg-ink text-sand shadow-2xl border border-sand/15 p-5 md:p-6">
      <div className="flex items-start gap-3">
        <MoonIcon size={18} className="text-gold flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-serif text-base">Çerezler</h3>
          <p className="text-xs text-sand/70 mt-1.5 leading-relaxed">
            Deneyimini iyileştirmek için çerezler kullanıyoruz. Devam ederek{" "}
            <Link href="/cerez-politikasi" className="text-gold hover:underline">
              çerez politikamızı
            </Link>{" "}
            kabul etmiş olursun.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => accept("all")}
              className="flex-1 px-4 py-2.5 bg-gold text-ink hover:bg-sand transition text-[10px] uppercase tracking-wider-2 font-medium"
            >
              Tümünü Kabul Et
            </button>
            <button
              onClick={() => accept("necessary")}
              className="px-4 py-2.5 border border-sand/30 hover:border-sand text-[10px] uppercase tracking-wider-2 transition"
            >
              Sadece Zorunlu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
