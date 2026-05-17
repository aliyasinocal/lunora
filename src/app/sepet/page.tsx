"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MoonIcon from "@/components/ui/MoonIcon";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  const lineItems = items
    .map((i) => {
      const product = products.find((p) => p.id === i.productId);
      return product ? { product, quantity: i.quantity } : null;
    })
    .filter((x): x is { product: typeof products[number]; quantity: number } => !!x);

  const subtotal = lineItems.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 3500 ? 0 : 89;
  const total = subtotal + shipping;

  if (lineItems.length === 0) {
    return (
      <Container size="default" className="py-32 text-center">
        <MoonIcon size={40} className="text-gold mx-auto mb-6" />
        <h1 className="font-display text-4xl md:text-5xl">Sepetin sakin.</h1>
        <p className="text-ink/65 mt-4 max-w-md mx-auto">
          Bir mum, bir tütsü, bir kart… Ritüelini kurmak için Lunora ürünlerini keşfetmeye ne dersin?
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button href="/urunler" variant="primary" size="lg">
            Ürünleri Keşfet
          </Button>
          <Button href="/koleksiyonlar" variant="outline" size="lg">
            Koleksiyonlar
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container size="wide" className="py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">Ritüelin başlıyor</span>
          <h1 className="font-display text-4xl md:text-5xl mt-2">Sepetin</h1>
        </div>
        <button
          onClick={() => {
            if (confirm("Sepetini boşaltmak istediğine emin misin?")) clearCart();
          }}
          className="text-[11px] uppercase tracking-wider-2 text-ink/60 hover:text-ink"
        >
          Sepeti Boşalt
        </button>
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16">
        <div>
          <div className="border-t border-ink/15">
            {lineItems.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="grid grid-cols-[100px_1fr_auto] md:grid-cols-[140px_1fr_120px_auto] gap-4 py-8 border-b border-ink/15 items-center"
              >
                <Link
                  href={`/urun/${product.slug}`}
                  className="relative aspect-[4/5] bg-sand-deep overflow-hidden"
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </Link>
                <div>
                  <Link
                    href={`/urun/${product.slug}`}
                    className="font-serif text-xl leading-tight hover:text-gold transition"
                  >
                    {product.name}
                  </Link>
                  <div className="text-[10px] uppercase tracking-wider-2 text-ink/55 mt-1">
                    {product.subtitle}
                  </div>
                  <div className="text-sm text-ink/70 mt-2">{formatPrice(product.price)}</div>
                  <div className="md:hidden flex items-center justify-between mt-3">
                    <QtyControl
                      quantity={quantity}
                      onChange={(q) => updateQuantity(product.id, q)}
                    />
                    <span className="font-medium">{formatPrice(product.price * quantity)}</span>
                  </div>
                </div>
                <div className="hidden md:flex items-center">
                  <QtyControl
                    quantity={quantity}
                    onChange={(q) => updateQuantity(product.id, q)}
                  />
                </div>
                <div className="hidden md:flex flex-col items-end gap-2">
                  <span className="font-serif text-lg">
                    {formatPrice(product.price * quantity)}
                  </span>
                  <button
                    onClick={() => removeItem(product.id)}
                    aria-label="Kaldır"
                    className="text-ink/40 hover:text-ink transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(product.id)}
                  aria-label="Kaldır"
                  className="md:hidden text-ink/40 hover:text-ink transition self-start"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <Link
            href="/urunler"
            className="inline-block mt-8 text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
          >
            ← Alışverişe devam et
          </Link>
        </div>

        <aside className="bg-sand-soft p-7 md:p-9 h-fit lg:sticky lg:top-32 border border-ink/10">
          <h2 className="font-display text-2xl mb-5">Sipariş Özeti</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-ink/65">Ara Toplam</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/65">Kargo</span>
              <span>{shipping === 0 ? "Ücretsiz" : formatPrice(shipping)}</span>
            </div>
            {shipping === 0 && subtotal > 0 && (
              <p className="text-[11px] text-gold">Ücretsiz kargo kazandın ✦</p>
            )}
          </div>
          <div className="gold-line w-full my-5" />
          <div className="flex justify-between font-serif text-xl">
            <span>Toplam</span>
            <span>{formatPrice(total)}</span>
          </div>
          <p className="text-[10px] uppercase tracking-wider-2 text-ink/50 mt-1">
            KDV dahil · Türkiye geneli
          </p>
          <div className="mt-6 space-y-3">
            <Button href="/odeme" variant="primary" fullWidth size="lg">
              Ödeme Adımına Geç
            </Button>
            <p className="text-center text-[11px] text-ink/55">
              Hediye notu, paketleme ve fatura tercihleri ödeme adımında.
            </p>
          </div>
        </aside>
      </div>
    </Container>
  );
}

function QtyControl({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (q: number) => void;
}) {
  return (
    <div className="flex items-center border border-ink/20">
      <button
        onClick={() => onChange(quantity - 1)}
        className="w-9 h-9 flex items-center justify-center hover:bg-ink hover:text-sand transition"
        aria-label="Azalt"
      >
        <Minus size={12} />
      </button>
      <span className="px-3 text-sm">{quantity}</span>
      <button
        onClick={() => onChange(quantity + 1)}
        className="w-9 h-9 flex items-center justify-center hover:bg-ink hover:text-sand transition"
        aria-label="Arttır"
      >
        <Plus size={12} />
      </button>
    </div>
  );
}
