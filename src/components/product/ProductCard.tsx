"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/format";
import { useFavorites } from "@/lib/favorites-context";
import { useCart } from "@/lib/cart-context";

type Props = {
  product: Product;
  priority?: boolean;
};

export default function ProductCard({ product, priority }: Props) {
  const { isFavorite, toggle } = useFavorites();
  const { addItem } = useCart();
  const isFav = isFavorite(product.id);

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
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.name}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          )}
          {(product.badge || product.isNew || product.isLimited) && (
            <span
              className={cn(
                "absolute top-3 left-3 px-2.5 py-1 text-[9px] uppercase tracking-wider-2 font-medium",
                product.theme === "navy"
                  ? "bg-ink text-sand"
                  : "bg-sand text-ink border border-ink/15"
              )}
            >
              {product.badge ?? (product.isNew ? "Yeni" : "Sınırlı")}
            </span>
          )}
          {product.oldPrice && (
            <span className="absolute top-3 right-3 px-2.5 py-1 text-[9px] uppercase tracking-wider-2 bg-gold text-ink font-medium">
              %
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}{" "}
              indirim
            </span>
          )}
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          toggle(product.id);
        }}
        aria-label={isFav ? "Favorilerden çıkar" : "Favorilere ekle"}
        className={cn(
          "absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-sand/85 backdrop-blur transition-all opacity-0 group-hover:opacity-100",
          isFav && "opacity-100"
        )}
      >
        <Heart size={15} className={isFav ? "text-gold fill-gold" : "text-ink"} />
      </button>

      <div className="pt-4 pb-2 px-1">
        <Link href={`/urun/${product.slug}`} className="block">
          <div className="text-[10px] uppercase tracking-wider-2 text-ink/50 mb-1.5">
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
        </Link>
        <button
          onClick={() => addItem(product.id, 1)}
          className="mt-3 w-full py-2.5 text-[10px] uppercase tracking-wider-2 border border-ink/20 hover:bg-ink hover:text-sand hover:border-ink transition opacity-0 group-hover:opacity-100"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
