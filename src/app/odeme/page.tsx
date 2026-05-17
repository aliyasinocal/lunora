"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, CreditCard, Truck, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import MoonIcon from "@/components/ui/MoonIcon";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import { formatPrice, cn } from "@/lib/format";

type Step = "address" | "shipping" | "payment";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [step, setStep] = useState<Step>("address");
  const [shipping, setShipping] = useState<"standard" | "express">("standard");
  const [payment, setPayment] = useState<"card" | "transfer">("card");
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftNote, setGiftNote] = useState("");
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    surname: "",
    address: "",
    city: "",
    district: "",
    postal: "",
    note: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const lineItems = items
    .map((i) => {
      const product = products.find((p) => p.id === i.productId);
      return product ? { product, quantity: i.quantity } : null;
    })
    .filter((x): x is { product: typeof products[number]; quantity: number } => !!x);

  const subtotal = lineItems.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const shippingCost = subtotal >= 3500 ? 0 : shipping === "express" ? 149 : 89;
  const giftCost = giftWrap ? 80 : 0;
  const total = subtotal + shippingCost + giftCost;

  if (lineItems.length === 0) {
    return (
      <Container size="default" className="py-24 text-center">
        <MoonIcon size={28} className="text-gold mx-auto mb-5" />
        <h1 className="font-display text-3xl">Sepetin boş.</h1>
        <p className="text-ink/60 mt-3">
          Ödeme adımına geçmek için önce sepetine bir parça eklemen gerekiyor.
        </p>
        <Button href="/urunler" variant="primary" className="mt-8">
          Ürünlere Git
        </Button>
      </Container>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNo = "LNR-" + Math.floor(100000 + Math.random() * 900000);
    try {
      sessionStorage.setItem(
        "lunora_last_order",
        JSON.stringify({
          orderNo,
          name: form.name + " " + form.surname,
          email: form.email,
          address: `${form.address}, ${form.district}/${form.city}`,
          total,
          itemCount: lineItems.reduce((s, l) => s + l.quantity, 0),
          shippingLabel: shipping === "express" ? "Aynı gün kargo" : "Standart kargo",
          giftWrap,
        })
      );
    } catch {}
    clearCart();
    router.push("/odeme/basarili");
  };

  return (
    <div className="min-h-screen bg-sand-soft">
      <header className="border-b border-ink/10 bg-sand">
        <Container size="wide" className="py-5 flex items-center justify-between">
          <Logo variant="compact" />
          <Link href="/sepet" className="text-[11px] uppercase tracking-wider-2 hover:text-gold transition">
            ← Sepete Dön
          </Link>
        </Container>
      </header>

      <Container size="wide" className="py-12 grid lg:grid-cols-[1.5fr_1fr] gap-12">
        <form onSubmit={handleSubmit}>
          <Stepper current={step} />

          {step === "address" && (
            <section className="space-y-7">
              <h2 className="font-display text-3xl">İletişim & Teslimat</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="E-posta" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Input label="Telefon" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                <Input label="Ad" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Input label="Soyad" required value={form.surname} onChange={(v) => setForm({ ...form, surname: v })} />
                <Input className="md:col-span-2" label="Adres" required value={form.address} onChange={(v) => setForm({ ...form, address: v })} />
                <Input label="Şehir" required value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
                <Input label="İlçe" required value={form.district} onChange={(v) => setForm({ ...form, district: v })} />
                <Input label="Posta Kodu" value={form.postal} onChange={(v) => setForm({ ...form, postal: v })} />
                <Input className="md:col-span-2" label="Sipariş notu (opsiyonel)" value={form.note} onChange={(v) => setForm({ ...form, note: v })} />
              </div>

              <label className="flex items-start gap-3 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="mt-1 accent-ink"
                />
                <div>
                  <div className="text-sm">Hediye paketleme ekle <span className="text-ink/50">(+80 TL)</span></div>
                  <div className="text-xs text-ink/55">Saten kurdele, mıknatıslı kutu ve elle yazılmış not.</div>
                </div>
              </label>

              {giftWrap && (
                <Input
                  label="Hediye notu"
                  value={giftNote}
                  onChange={setGiftNote}
                  placeholder="elle yazılmış kartın üzerine yazılacak..."
                />
              )}

              <div className="pt-4">
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  onClick={() => setStep("shipping")}
                >
                  Kargo Adımına Geç →
                </Button>
              </div>
            </section>
          )}

          {step === "shipping" && (
            <section className="space-y-7">
              <h2 className="font-display text-3xl">Kargo Seçimi</h2>
              <div className="space-y-3">
                <ShippingOption
                  selected={shipping === "standard"}
                  onClick={() => setShipping("standard")}
                  title="Standart Kargo · 2-3 iş günü"
                  description="Yurtiçi Kargo ile teslimat. 3.500 TL üzeri ücretsiz."
                  cost={subtotal >= 3500 ? "Ücretsiz" : "89 TL"}
                />
                <ShippingOption
                  selected={shipping === "express"}
                  onClick={() => setShipping("express")}
                  title="Aynı Gün Kargo · İstanbul içi"
                  description="14:00'a kadar verilen siparişler aynı gün motorla teslim."
                  cost="149 TL"
                />
              </div>
              <div className="pt-4 flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep("address")}>
                  ← Geri
                </Button>
                <Button type="button" variant="primary" size="lg" onClick={() => setStep("payment")}>
                  Ödeme Adımına Geç →
                </Button>
              </div>
            </section>
          )}

          {step === "payment" && (
            <section className="space-y-7">
              <h2 className="font-display text-3xl">Ödeme</h2>
              <p className="text-xs text-ink/50 -mt-3">
                Bu bir demo sitedir. Gerçek ödeme alınmaz, kart bilgileri saklanmaz.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <PaymentOption
                  selected={payment === "card"}
                  onClick={() => setPayment("card")}
                  icon={<CreditCard size={18} />}
                  title="Kredi Kartı"
                  description="Tek çekim veya 3-9 taksit"
                />
                <PaymentOption
                  selected={payment === "transfer"}
                  onClick={() => setPayment("transfer")}
                  icon={<Wallet size={18} />}
                  title="Havale / EFT"
                  description="2 saatte ödeme onayı"
                />
              </div>

              {payment === "card" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <Input className="md:col-span-2" label="Kart üzerindeki isim" required value={form.cardName} onChange={(v) => setForm({ ...form, cardName: v })} />
                  <Input className="md:col-span-2" label="Kart numarası" required value={form.cardNumber} onChange={(v) => setForm({ ...form, cardNumber: v })} placeholder="0000 0000 0000 0000" />
                  <Input label="Son kullanma" required value={form.expiry} onChange={(v) => setForm({ ...form, expiry: v })} placeholder="AA/YY" />
                  <Input label="CVC" required value={form.cvc} onChange={(v) => setForm({ ...form, cvc: v })} placeholder="000" />
                </div>
              )}

              {payment === "transfer" && (
                <div className="bg-sand-soft border border-ink/10 p-5 text-sm space-y-2">
                  <p className="text-ink/70">
                    Aşağıdaki hesap bilgilerine sipariş numaranız açıklamasıyla havale yapabilirsiniz.
                  </p>
                  <p className="font-serif text-base">Lunora Ev Ritüelleri A.Ş.</p>
                  <p className="text-ink/75">Garanti BBVA · İBAN: TR12 0006 2000 4570 0006 4892 70</p>
                </div>
              )}

              <div className="pt-4 flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep("shipping")}>
                  ← Geri
                </Button>
                <button
                  type="submit"
                  className="flex-1 bg-ink text-sand hover:bg-ink-soft py-4 px-8 text-[11px] uppercase tracking-wider-2 font-medium transition"
                >
                  Siparişi Tamamla · {formatPrice(total)}
                </button>
              </div>
            </section>
          )}
        </form>

        <aside className="bg-sand p-7 md:p-9 h-fit lg:sticky lg:top-12 border border-ink/10">
          <h2 className="font-display text-xl mb-5">Siparişin</h2>
          <ul className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-1">
            {lineItems.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-3">
                <div className="relative w-14 h-16 flex-shrink-0 bg-sand-deep">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                  <span className="absolute -top-2 -right-2 bg-ink text-sand text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {quantity}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-sm leading-tight">{product.name}</div>
                  <div className="text-[10px] uppercase tracking-wider-2 text-ink/55 mt-0.5">
                    {product.subtitle}
                  </div>
                </div>
                <div className="text-sm">{formatPrice(product.price * quantity)}</div>
              </li>
            ))}
          </ul>
          <div className="space-y-2.5 text-sm border-t border-ink/15 pt-4">
            <div className="flex justify-between">
              <span className="text-ink/65">Ara Toplam</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/65">Kargo</span>
              <span>{shippingCost === 0 ? "Ücretsiz" : formatPrice(shippingCost)}</span>
            </div>
            {giftCost > 0 && (
              <div className="flex justify-between">
                <span className="text-ink/65">Hediye paketi</span>
                <span>{formatPrice(giftCost)}</span>
              </div>
            )}
          </div>
          <div className="gold-line w-full my-4" />
          <div className="flex justify-between font-serif text-xl">
            <span>Toplam</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[9px] uppercase tracking-wider-2 text-ink/60">
            <div className="border border-ink/10 p-2 flex flex-col items-center gap-1">
              <Truck size={14} className="text-gold" />
              <span>24sa kargo</span>
            </div>
            <div className="border border-ink/10 p-2 flex flex-col items-center gap-1">
              <Check size={14} className="text-gold" />
              <span>SSL güvenli</span>
            </div>
            <div className="border border-ink/10 p-2 flex flex-col items-center gap-1">
              <CreditCard size={14} className="text-gold" />
              <span>9 taksit</span>
            </div>
          </div>
        </aside>
      </Container>
    </div>
  );
}

function Stepper({ current }: { current: Step }) {
  const steps: { id: Step; label: string }[] = [
    { id: "address", label: "Teslimat" },
    { id: "shipping", label: "Kargo" },
    { id: "payment", label: "Ödeme" },
  ];
  const currentIndex = steps.findIndex((s) => s.id === current);
  return (
    <div className="flex items-center gap-4 mb-10">
      {steps.map((s, i) => {
        const active = i === currentIndex;
        const done = i < currentIndex;
        return (
          <div key={s.id} className="flex items-center gap-3 flex-1">
            <span
              className={cn(
                "w-7 h-7 rounded-full border flex items-center justify-center text-xs font-medium",
                done
                  ? "bg-gold border-gold text-ink"
                  : active
                  ? "bg-ink border-ink text-sand"
                  : "bg-transparent border-ink/30 text-ink/40"
              )}
            >
              {done ? <Check size={12} /> : i + 1}
            </span>
            <span
              className={cn(
                "text-[11px] uppercase tracking-wider-2",
                active || done ? "text-ink" : "text-ink/40"
              )}
            >
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <span className={cn("flex-1 h-px", done ? "bg-gold" : "bg-ink/15")} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Input({
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  className,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full bg-sand border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
      />
    </label>
  );
}

function ShippingOption({
  selected,
  onClick,
  title,
  description,
  cost,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description: string;
  cost: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full text-left flex items-center justify-between gap-4 p-5 border transition",
        selected ? "border-ink bg-sand" : "border-ink/15 hover:border-ink/40 bg-sand-soft"
      )}
    >
      <div className="flex items-start gap-4">
        <span
          className={cn(
            "w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0",
            selected ? "border-ink" : "border-ink/30"
          )}
        >
          {selected && <span className="w-2 h-2 rounded-full bg-ink" />}
        </span>
        <div>
          <div className="font-serif text-base">{title}</div>
          <div className="text-xs text-ink/60 mt-1">{description}</div>
        </div>
      </div>
      <div className="font-medium text-sm flex-shrink-0">{cost}</div>
    </button>
  );
}

function PaymentOption({
  selected,
  onClick,
  icon,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-left flex items-start gap-3 p-5 border transition",
        selected ? "border-ink bg-sand" : "border-ink/15 hover:border-ink/40 bg-sand-soft"
      )}
    >
      <span className={cn("text-gold mt-0.5", !selected && "text-ink/50")}>{icon}</span>
      <div>
        <div className="font-serif text-base">{title}</div>
        <div className="text-xs text-ink/60 mt-0.5">{description}</div>
      </div>
    </button>
  );
}
