"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/format";
import { useFavorites } from "@/lib/favorites-context";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/lib/toast-context";

type Props = {
  product: Product;
  priority?: boolean;
  onQuickView?: (product: Product) => void;
};

export default function ProductCard({ product, priority, onQuickView }: Props) {
  const { isFavorite, toggle } = useFavorites();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [adding, setAdding] = useState(false);
  const isFav = isFavorite(product.id);

  // Fake rating + review count derived from product id, stable per product
  const seed = product.id.charCodeAt(2) || 1;
  const rating = (4.5 + ((seed % 5) / 10)).toFixed(1);
  const reviewCount = 40 + (seed * 7) % 280;

  const lowStock = product.stockCount < 10;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdding(true);
    addItem(product.id, 1);
    showToast({
      type: "cart",
      title: "Sepete eklendi",
      description: product.name,
      image: product.images[0],
    });
    setTimeout(() => setAdding(false), 1500);
  };

  const handleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    toggle(product.id);
    if (!isFav) {
      showToast({
        type: "favorite",
        title: "Favorilere eklendi",
        description: product.name,
        image: product.images[0],
      });
    }
  };

  return (
    <div className="group relative">
      <Link href={`/urun/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternatif renk`}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          )}

          {/* Top-left badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span
                className={cn(
                  "px-2.5 py-1 text-[9px] uppercase tracking-wider-2 font-medium",
                  product.theme === "navy"
                    ? "bg-ink text-sand"
                    : "bg-sand text-ink border border-ink/15"
                )}
              >
                {product.badge}
              </span>
            )}
            {product.isNew && !product.badge && (
              <span className="px-2.5 py-1 text-[9px] uppercase tracking-wider-2 font-medium bg-sand text-ink border border-ink/15">
                Yeni
              </span>
            )}
            {product.isLimited && !product.badge && (
              <span className="px-2.5 py-1 text-[9px] uppercase tracking-wider-2 font-medium bg-gold text-ink">
                Sınırlı
              </span>
            )}
          </div>

          {/* Top-right: Discount */}
          {product.oldPrice && (
            <span className="absolute top-3 right-3 px-2.5 py-1 text-[9px] uppercase tracking-wider-2 bg-gold text-ink font-medium">
              %
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}{" "}
              indirim
            </span>
          )}

          {/* Quick actions: slides up from bottom on hover */}
          <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-ink/85 backdrop-blur-md p-2.5 flex gap-1.5">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-sand text-ink hover:bg-gold transition text-[10px] uppercase tracking-wider-2 font-medium"
            >
              <ShoppingBag size={12} />
              <span>{adding ? "Eklendi ✓" : "Sepete Ekle"}</span>
            </button>
            {onQuickView && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onQuickView(product);
                }}
                aria-label="Hızlı önizleme"
                className="w-10 bg-sand/10 hover:bg-sand/20 text-sand flex items-center justify-center transition"
              >
                <Eye size={13} />
              </button>
            )}
          </div>
        </div>
      </Link>

      {/* Favorite — top right corner, always visible if favorited */}
      <button
        onClick={handleFav}
        aria-label={isFav ? "Favorilerden çıkar" : "Favorilere ekle"}
        className={cn(
          "absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-sand/90 backdrop-blur transition-all duration-300",
          isFav
            ? "opacity-100 scale-100"
            : "opacity-0 group-hover:opacity-100 hover:scale-110"
        )}
        style={{ top: product.oldPrice ? "44px" : "12px" }}
      >
        <Heart size={14} className={cn(isFav && "text-gold fill-gold")} />
      </button>

      <div className="pt-4 pb-2 px-1">
        <Link href={`/urun/${product.slug}`} className="block">
          {/* Rating row */}
          <div className="flex items-center gap-1.5 text-[10px] text-ink/55 mb-1.5">
            <div className="flex items-center gap-px text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={9}
                  className={i < Math.round(parseFloat(rating)) ? "fill-gold" : ""}
                />
              ))}
            </div>
            <span>
              {rating} · {reviewCount} yorum
            </span>
          </div>

          <div className="text-[10px] uppercase tracking-wider-2 text-ink/50 mb-1">
            {product.subtitle}
          </div>
          <h3 className="font-serif text-lg leading-tight text-ink group-hover:text-gold transition">
            {product.name}
          </h3>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-sm font-medium text-ink">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-ink/40 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          {/* Color swatches + stock */}
          <div className="mt-2.5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full ring-1 ring-ink/15 bg-ink"
                title="Lacivert"
              />
              <span
                className="w-3 h-3 rounded-full ring-1 ring-ink/15 bg-sand-deep"
                title="Krem"
              />
            </div>
            {lowStock && (
              <span className="text-[9px] uppercase tracking-wider-2 text-gold flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
                Son {product.stockCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
