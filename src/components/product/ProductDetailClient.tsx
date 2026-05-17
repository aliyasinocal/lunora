"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus, Truck, Gift, Sparkles, Recycle } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import { useFavorites } from "@/lib/favorites-context";

type Props = {
  product: Product;
};

export default function ProductDetailClient({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState<string>("features");
  const { addItem } = useCart();
  const { isFavorite, toggle } = useFavorites();
  const isFav = isFavorite(product.id);

  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
      {/* Gallery */}
      <div className="space-y-3">
        <div className="relative aspect-[4/5] bg-sand-deep overflow-hidden">
          <Image
            src={product.images[activeImage]}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          {(product.badge || product.isNew || product.isLimited) && (
            <span
              className={cn(
                "absolute top-5 left-5 px-3 py-1.5 text-[10px] uppercase tracking-wider-2 font-medium",
                product.theme === "navy" ? "bg-ink text-sand" : "bg-sand text-ink border border-ink"
              )}
            >
              {product.badge ?? (product.isNew ? "Yeni" : "Sınırlı")}
            </span>
          )}
        </div>
        {product.images.length > 1 && (
          <div className="grid grid-cols-5 gap-2">
            {product.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative aspect-square overflow-hidden bg-sand-deep border transition",
                  activeImage === i ? "border-ink" : "border-transparent hover:border-ink/30"
                )}
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="lg:sticky lg:top-32 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-1">
        {product.collection && (
          <Link
            href={`/koleksiyonlar/${product.collection}`}
            className="text-[10px] uppercase tracking-wider-3 text-gold hover:underline"
          >
            {product.collection.replace(/-/g, " ").toUpperCase()}
          </Link>
        )}
        <h1 className="font-display text-4xl md:text-5xl mt-3 leading-tight">{product.name}</h1>
        <p className="text-sm text-ink/55 mt-1">{product.subtitle}</p>

        <div className="mt-6 flex items-baseline gap-3">
          <span className="font-serif text-3xl">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-ink/40 line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <p className="text-[11px] uppercase tracking-wider-2 text-ink/50 mt-1">
          KDV dahil · Türkiye geneli 3.500 TL üzeri ücretsiz kargo
        </p>

        <p className="text-base text-ink/70 leading-relaxed mt-7">{product.description}</p>

        {/* Quantity + actions */}
        <div className="mt-8 flex gap-3 items-stretch">
          <div className="flex items-center border border-ink/20">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-11 h-11 flex items-center justify-center hover:bg-ink hover:text-sand transition"
              aria-label="Azalt"
            >
              <Minus size={14} />
            </button>
            <span className="px-3 text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-11 h-11 flex items-center justify-center hover:bg-ink hover:text-sand transition"
              aria-label="Arttır"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            onClick={() => addItem(product.id, quantity)}
            className="flex-1 bg-ink text-sand hover:bg-ink-soft transition text-[11px] uppercase tracking-wider-2 font-medium"
          >
            Sepete Ekle · {formatPrice(product.price * quantity)}
          </button>
          <button
            onClick={() => toggle(product.id)}
            aria-label="Favorilere ekle"
            className={cn(
              "w-11 h-11 border border-ink/20 flex items-center justify-center transition",
              isFav ? "bg-gold border-gold" : "hover:bg-ink hover:text-sand hover:border-ink"
            )}
          >
            <Heart size={16} className={isFav ? "fill-ink text-ink" : ""} />
          </button>
        </div>

        {/* Stock */}
        <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-wider-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Stokta · {product.stockCount} adet</span>
        </div>

        {/* Trust badges */}
        <div className="mt-7 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider-2 text-ink/65">
          <div className="flex items-center gap-2 border border-ink/10 p-3">
            <Truck size={14} className="text-gold" /> 24 saatte kargo
          </div>
          <div className="flex items-center gap-2 border border-ink/10 p-3">
            <Gift size={14} className="text-gold" /> Hediye paketi ücretsiz
          </div>
          <div className="flex items-center gap-2 border border-ink/10 p-3">
            <Sparkles size={14} className="text-gold" /> El yapımı
          </div>
          <div className="flex items-center gap-2 border border-ink/10 p-3">
            <Recycle size={14} className="text-gold" /> Geri dönüşümlü
          </div>
        </div>

        {/* Accordion sections */}
        <div className="mt-10 border-t border-ink/15">
          <Accordion
            id="features"
            title="Özellikler"
            open={openSection === "features"}
            onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
          >
            <ul className="space-y-2 text-sm text-ink/75">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 text-[6px]">●</span> {f}
                </li>
              ))}
            </ul>
          </Accordion>

          {product.notes && (
            <Accordion
              id="notes"
              title="Koku Notaları"
              open={openSection === "notes"}
              onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
            >
              <div className="space-y-4 text-sm">
                {product.notes.top && (
                  <NoteRow label="Üst" notes={product.notes.top} />
                )}
                {product.notes.heart && (
                  <NoteRow label="Kalp" notes={product.notes.heart} />
                )}
                {product.notes.base && (
                  <NoteRow label="Taban" notes={product.notes.base} />
                )}
              </div>
            </Accordion>
          )}

          {product.ritual && (
            <Accordion
              id="ritual"
              title="Ritüel Rehberi"
              open={openSection === "ritual"}
              onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
            >
              <ol className="space-y-3 text-sm text-ink/75">
                {product.ritual.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-display text-gold text-lg leading-none mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Accordion>
          )}

          {product.ingredients && (
            <Accordion
              id="ingredients"
              title="İçindekiler"
              open={openSection === "ingredients"}
              onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
            >
              <p className="text-xs text-ink/70 leading-relaxed">
                {product.ingredients.join(", ")}.
              </p>
            </Accordion>
          )}

          <Accordion
            id="shipping"
            title="Kargo & İade"
            open={openSection === "shipping"}
            onToggle={(id) => setOpenSection(openSection === id ? "" : id)}
          >
            <div className="space-y-3 text-sm text-ink/70">
              <p>
                Siparişler atölyemizden 24 saat içinde kargoya verilir. Türkiye geneli 3.500 TL
                üzeri alımlarda kargo ücretsizdir.
              </p>
              <p>
                Açılmamış ürünler 14 gün içinde iade edilebilir. Hijyen gereği açılmış bakım
                ürünleri ve kişiselleştirilmiş hediyeler iade kapsamında değildir.
              </p>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function Accordion({
  id,
  title,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  open: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-ink/15">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between py-5 text-left text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
      >
        <span>{title}</span>
        <span className="text-xl font-light">{open ? "−" : "+"}</span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function NoteRow({ label, notes }: { label: string; notes: string[] }) {
  return (
    <div>
      <span className="text-[10px] uppercase tracking-wider-2 text-ink/50">{label}</span>
      <div className="font-serif text-base text-ink mt-0.5">{notes.join(" · ")}</div>
    </div>
  );
}
