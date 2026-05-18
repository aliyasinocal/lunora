"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Minus,
  Plus,
  Truck,
  Gift,
  Sparkles,
  Recycle,
  Star,
  Share2,
  ZoomIn,
  Check,
} from "lucide-react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import { useFavorites } from "@/lib/favorites-context";
import { useToast } from "@/lib/toast-context";
import { useRecentlyViewed } from "@/lib/recently-viewed-context";

type Props = {
  product: Product;
};

export default function ProductDetailClient({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState<string>("features");
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const { addItem } = useCart();
  const { isFavorite, toggle } = useFavorites();
  const { showToast } = useToast();
  const { add: addRecent } = useRecentlyViewed();
  const isFav = isFavorite(product.id);

  useEffect(() => {
    addRecent(product.id);
  }, [product.id, addRecent]);

  // Fake but stable rating
  const seed = product.id.charCodeAt(2) || 1;
  const rating = (4.5 + ((seed % 5) / 10)).toFixed(1);
  const reviewCount = 40 + (seed * 7) % 280;

  const reviews = [
    {
      name: "Elif K.",
      rating: 5,
      date: "2 hafta önce",
      title: "Beklediğimden çok daha iyi",
      text:
        "Kutusu açtığım an etkilendim. Mum kokusu çok yumuşak, üç gündür akşamları sadece o yanıyor. Hediye için almıştım ama kendime sakladım.",
      verified: true,
    },
    {
      name: "Murat T.",
      rating: 5,
      date: "1 ay önce",
      title: "Hediye olarak mükemmel",
      text:
        "Eşime yıldönümü için aldım. Paketleme çok özenli, elle yazılmış kart gerçekten dokunaklı. Tekrar alacağım.",
      verified: true,
    },
    {
      name: "Aysu D.",
      rating: 4,
      date: "1 ay önce",
      title: "Çok güzel ama küçük not",
      text:
        "Ürün kalitesi tartışmasız. Sadece kargo bir gün geç geldi ama Lunora ekibi sürekli iletişimde kaldı, takdir ettim.",
      verified: true,
    },
  ];

  const ratingDistribution = [
    { stars: 5, count: Math.round(reviewCount * 0.78) },
    { stars: 4, count: Math.round(reviewCount * 0.16) },
    { stars: 3, count: Math.round(reviewCount * 0.04) },
    { stars: 2, count: Math.round(reviewCount * 0.01) },
    { stars: 1, count: Math.round(reviewCount * 0.01) },
  ];

  const handleAdd = () => {
    addItem(product.id, quantity);
    showToast({
      type: "cart",
      title: "Sepete eklendi",
      description: product.name + (quantity > 1 ? ` × ${quantity}` : ""),
      image: product.images[0],
    });
  };

  const handleFav = () => {
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

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, url });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast({
        type: "success",
        title: "Bağlantı kopyalandı",
        description: "Şimdi paylaşabilirsin",
      });
    } catch {}
  };

  return (
    <>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="space-y-3">
          <div
            className="relative aspect-[4/5] bg-sand-deep overflow-hidden group cursor-zoom-in"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setZoomPos({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
              });
            }}
            onClick={() => setShowZoom(true)}
          >
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              style={{
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
              }}
            />
            {(product.badge || product.isNew || product.isLimited) && (
              <span
                className={cn(
                  "absolute top-5 left-5 px-3 py-1.5 text-[10px] uppercase tracking-wider-2 font-medium",
                  product.theme === "navy"
                    ? "bg-ink text-sand"
                    : "bg-sand text-ink border border-ink"
                )}
              >
                {product.badge ?? (product.isNew ? "Yeni" : "Sınırlı")}
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowZoom(true);
              }}
              aria-label="Yakınlaştır"
              className="absolute top-5 right-5 w-10 h-10 bg-sand/85 backdrop-blur flex items-center justify-center hover:bg-sand transition"
            >
              <ZoomIn size={15} />
            </button>
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative aspect-square overflow-hidden bg-sand-deep border-2 transition",
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
        <div className="lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-1">
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

          {/* Rating */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-px text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.round(parseFloat(rating)) ? "fill-gold" : ""}
                />
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-wider-2 text-ink/65">
              {rating} · {reviewCount} yorum
            </span>
            <button
              onClick={() => {
                document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[10px] uppercase tracking-wider-2 text-ink/55 hover:text-gold underline-offset-4 hover:underline"
            >
              Yorumları gör
            </button>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-serif text-3xl">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-ink/40 line-through">{formatPrice(product.oldPrice)}</span>
            )}
            {product.oldPrice && (
              <span className="px-2 py-1 text-[10px] uppercase tracking-wider-2 bg-gold text-ink font-medium">
                %{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)} indirim
              </span>
            )}
          </div>
          <p className="text-[11px] uppercase tracking-wider-2 text-ink/50 mt-1">
            KDV dahil · 3.500 TL üzeri ücretsiz kargo · 4'e kadar taksit
          </p>

          <p className="text-base text-ink/70 leading-relaxed mt-7">{product.description}</p>

          {/* Color picker (mock) */}
          <div className="mt-7">
            <div className="text-[10px] uppercase tracking-wider-2 text-ink/55 mb-2.5">
              Renk · {product.theme === "navy" ? "Lacivert" : "Krem"}
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Lacivert"
                className={cn(
                  "w-8 h-8 rounded-full ring-2 ring-offset-2 ring-offset-sand transition bg-ink",
                  product.theme === "navy" ? "ring-ink" : "ring-transparent hover:ring-ink/30"
                )}
              />
              <button
                aria-label="Krem"
                className={cn(
                  "w-8 h-8 rounded-full ring-2 ring-offset-2 ring-offset-sand transition bg-sand-deep",
                  product.theme === "cream" ? "ring-ink" : "ring-transparent hover:ring-ink/30"
                )}
              />
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="mt-7 flex gap-3 items-stretch">
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
              onClick={handleAdd}
              className="flex-1 bg-ink text-sand hover:bg-ink-soft transition text-[11px] uppercase tracking-wider-2 font-medium"
            >
              Sepete Ekle · {formatPrice(product.price * quantity)}
            </button>
            <button
              onClick={handleFav}
              aria-label="Favorilere ekle"
              className={cn(
                "w-11 h-11 border border-ink/20 flex items-center justify-center transition",
                isFav ? "bg-gold border-gold" : "hover:bg-ink hover:text-sand hover:border-ink"
              )}
            >
              <Heart size={16} className={isFav ? "fill-ink text-ink" : ""} />
            </button>
            <button
              onClick={handleShare}
              aria-label="Paylaş"
              className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-sand hover:border-ink transition"
            >
              <Share2 size={15} />
            </button>
          </div>

          {/* Stock */}
          <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-wider-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Stokta · {product.stockCount} adet</span>
            {product.stockCount < 15 && (
              <span className="ml-2 text-gold">· {Math.floor(seed % 12 + 4)} kişi şu an inceliyor</span>
            )}
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
                  {product.notes.top && <NoteRow label="Üst" notes={product.notes.top} />}
                  {product.notes.heart && <NoteRow label="Kalp" notes={product.notes.heart} />}
                  {product.notes.base && <NoteRow label="Taban" notes={product.notes.base} />}
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
                  Açılmamış ürünler 14 gün içinde iade edilebilir.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <section id="reviews" className="mt-24 md:mt-32 pt-12 border-t border-ink/15">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
              Müşteri Yorumları
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
              {rating} <span className="text-gold">★</span>
            </h2>
            <p className="text-ink/65 mt-2">{reviewCount} doğrulanmış değerlendirme</p>

            <div className="gold-line w-12 my-6" />

            <div className="space-y-2">
              {ratingDistribution.map((r) => (
                <div key={r.stars} className="flex items-center gap-3 text-xs">
                  <span className="text-ink/65 w-6">{r.stars}★</span>
                  <div className="flex-1 h-1 bg-ink/10 overflow-hidden">
                    <div
                      className="h-full bg-gold"
                      style={{ width: `${(r.count / reviewCount) * 100}%` }}
                    />
                  </div>
                  <span className="text-ink/55 w-8 text-right">{r.count}</span>
                </div>
              ))}
            </div>

            <button className="mt-7 inline-flex items-center gap-2 px-6 py-3 border border-ink/25 hover:border-ink hover:bg-ink/5 text-[11px] uppercase tracking-wider-2 transition">
              Yorum Yaz
            </button>
          </div>

          <div className="space-y-8">
            {reviews.map((r, i) => (
              <article key={i} className="border-b border-ink/10 pb-8 last:border-b-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center text-ink/70 font-serif text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-[10px] uppercase tracking-wider-2 text-ink/50">
                      {r.date}
                      {r.verified && (
                        <span className="ml-2 inline-flex items-center gap-1 text-gold">
                          <Check size={10} /> Doğrulanmış alıcı
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-px text-gold mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className={j < r.rating ? "fill-gold" : ""}
                    />
                  ))}
                </div>
                <h3 className="font-serif text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{r.text}</p>
              </article>
            ))}
            <button className="text-[11px] uppercase tracking-wider-2 hover:text-gold transition">
              Daha fazla yorum yükle →
            </button>
          </div>
        </div>
      </section>

      {/* Image zoom modal */}
      {showZoom && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setShowZoom(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowZoom(false);
            }}
            className="absolute top-6 right-6 w-10 h-10 bg-sand/10 hover:bg-sand/20 text-sand flex items-center justify-center transition"
            aria-label="Kapat"
          >
            ✕
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/5]">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
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
