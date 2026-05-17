"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-md flex flex-col">
      <div className="border-b border-sand/20 px-6 py-5 flex items-center gap-4">
        <Search size={20} className="text-gold" />
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ürün, koleksiyon ya da kategori ara…"
          className="flex-1 bg-transparent text-sand placeholder:text-sand/40 outline-none text-lg font-serif"
        />
        <button onClick={onClose} aria-label="Kapat" className="text-sand hover:text-gold transition">
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-8">
        {!query && (
          <div className="max-w-4xl mx-auto text-sand">
            <p className="text-[10px] uppercase tracking-wider-3 text-sand/50 mb-4">
              Sıkça aranan
            </p>
            <div className="flex flex-wrap gap-2">
              {["ritüel seti", "soya mum", "tütsü", "difüzör", "olumlama", "vücut yağı", "gua sha"].map(
                (s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-4 py-2 border border-sand/20 text-xs uppercase tracking-wider-2 hover:border-gold hover:text-gold transition"
                  >
                    {s}
                  </button>
                )
              )}
            </div>
          </div>
        )}
        {query && results.length === 0 && (
          <div className="text-center text-sand/60 py-20 text-sm">
            "{query}" için sonuç bulunamadı.
          </div>
        )}
        {results.length > 0 && (
          <div className="max-w-4xl mx-auto grid gap-3">
            {results.map((p) => (
              <Link
                key={p.id}
                href={`/urun/${p.slug}`}
                onClick={onClose}
                className="flex items-center gap-5 p-3 border border-sand/10 hover:border-gold/40 hover:bg-sand/5 transition group"
              >
                <div className="relative w-20 h-20 flex-shrink-0 bg-sand/10 overflow-hidden">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="flex-1 min-w-0 text-sand">
                  <div className="font-serif text-base">{p.name}</div>
                  <div className="text-[11px] text-sand/60 mt-0.5">{p.subtitle}</div>
                </div>
                <div className="text-sm font-medium text-gold">{formatPrice(p.price)}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
