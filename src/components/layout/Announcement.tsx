"use client";

import { useState } from "react";
import { X } from "lucide-react";

const messages = [
  "Türkiye geneli 3.500 TL ve üzeri siparişlerde ücretsiz kargo",
  "Yeni: Moonlit Edition limited koleksiyon",
  "Hediye paketleme ücretsiz · Notunla birlikte gönderelim",
  "Atölyemizde el yapımı — küçük partilerle üretim",
];

export default function Announcement() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;
  return (
    <div className="relative bg-ink text-sand py-2 overflow-hidden border-b border-gold/20">
      <div className="marquee">
        <div className="marquee-content">
          {[...messages, ...messages].map((m, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider-3 flex items-center gap-3">
              <span className="text-gold">◆</span>
              {m}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...messages, ...messages].map((m, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider-3 flex items-center gap-3">
              <span className="text-gold">◆</span>
              {m}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => setClosed(true)}
        aria-label="Kapat"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-sand/60 hover:text-sand transition"
      >
        <X size={14} />
      </button>
    </div>
  );
}
