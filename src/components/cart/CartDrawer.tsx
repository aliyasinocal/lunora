"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import Button from "../ui/Button";
import MoonIcon from "../ui/MoonIcon";

export default function CartDrawer() {
  const { items, isOpen, setOpen, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const lineItems = items
    .map((i) => {
      const product = products.find((p) => p.id === i.productId);
      return product ? { product, quantity: i.quantity } : null;
    })
    .filter((x): x is { product: typeof products[number]; quantity: number } => !!x);

  const subtotal = lineItems.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const freeShipThreshold = 3500;
  const progress = Math.min((subtotal / freeShipThreshold) * 100, 100);

  return (
    <>
      <div
        className={`fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-sand z-50 flex flex-col shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <div className="flex items-center gap-2">
            <MoonIcon size={16} className="text-gold" />
            <h2 className="font-display text-xl">Sepetin</h2>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Sepeti kapat">
            <X size={20} />
          </button>
        </div>

        {/* Free ship progress */}
        {subtotal > 0 && subtotal < freeShipThreshold && (
          <div className="px-6 py-3 border-b border-ink/10 text-[11px]">
            <div className="flex justify-between mb-1.5">
              <span>Ücretsiz kargoya {formatPrice(freeShipThreshold - subtotal)} kaldı</span>
            </div>
            <div className="h-1 bg-ink/10 overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        {subtotal >= freeShipThreshold && (
          <div className="px-6 py-3 border-b border-ink/10 text-[11px] uppercase tracking-wider-2 text-gold flex items-center gap-2">
            <MoonIcon size={12} /> Kargoyu kazandın
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {lineItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-10 gap-4">
              <MoonIcon size={32} className="text-ink/20" />
              <p className="font-serif text-xl">Sepetin sakin, bir koku eklemeye ne dersin?</p>
              <p className="text-sm text-ink/60">
                Lunora ritüel objelerini keşfederek başlayabilirsin.
              </p>
              <Button href="/urunler" onClick={() => setOpen(false)} variant="primary">
                Ürünleri Keşfet
              </Button>
            </div>
          ) : (
            <ul className="px-6 py-2 divide-y divide-ink/10">
              {lineItems.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <Link
                    href={`/urun/${product.slug}`}
                    onClick={() => setOpen(false)}
                    className="relative w-20 h-24 flex-shrink-0 bg-sand-deep overflow-hidden"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <Link
                      href={`/urun/${product.slug}`}
                      onClick={() => setOpen(false)}
                      className="font-serif text-base leading-tight"
                    >
                      {product.name}
                    </Link>
                    <span className="text-[10px] uppercase tracking-wider-2 text-ink/50 mt-0.5">
                      {product.subtitle}
                    </span>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-ink/20">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-ink hover:text-sand transition"
                          aria-label="Azalt"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-ink hover:text-sand transition"
                          aria-label="Arttır"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="text-sm font-medium">
                        {formatPrice(product.price * quantity)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-ink/40 hover:text-ink transition self-start"
                    aria-label="Kaldır"
                  >
                    <Trash2 size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lineItems.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-ink/60">Ara Toplam</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-ink/60">Kargo</span>
              <span>{subtotal >= freeShipThreshold ? "Ücretsiz" : "Adımda hesaplanır"}</span>
            </div>
            <div className="gold-line w-full" />
            <div className="flex justify-between font-serif text-lg">
              <span>Toplam</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Button href="/sepet" variant="secondary" fullWidth onClick={() => setOpen(false)}>
              Sepete Git
            </Button>
            <Button href="/odeme" variant="primary" fullWidth onClick={() => setOpen(false)}>
              Ödeme Adımına Geç
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
