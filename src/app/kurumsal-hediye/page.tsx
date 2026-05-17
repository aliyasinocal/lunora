"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import MoonIcon from "@/components/ui/MoonIcon";

export default function CorporatePage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    quantity: "25-50",
    note: "",
  });

  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Markanızın imzasıyla hediyeler"
        subtitle="25 adet üzeri özel kurumsal hediye paketleri. Logolu kartlar, özelleştirilmiş kutular ve seçtiğiniz ritüel objeleri."
        variant="ink"
      />

      <Container size="wide" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/products/essence-set-navy.jpg"
              alt="Kurumsal hediye seti"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <MoonIcon size={22} className="text-gold mb-4" />
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Çalışana, müşteriye, partnere.
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed">
              Yılbaşı, terfi, doğum günü, yeni yıl, açılış… Markanızın imzasını taşıyan
              ritüel hediye setleri, sıradan bir kutudan çok daha fazlasını ifade eder.
              Söğüt'teki atölyemizde her bir set tek tek hazırlanır.
            </p>
            <div className="gold-line w-12 mt-8 mb-6" />
            <ul className="space-y-3 text-sm text-ink/75">
              {[
                "25 adet üzeri sipariş",
                "Logo basımlı özel kart ve kutu opsiyonu",
                "Farklı ürün kombinasyonları",
                "El yazısı kartlar (her sete özel)",
                "Talep edilen tarihte teslimat",
                "Faturalı, kurumsal süreç",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 text-[6px]">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <section className="bg-sand-soft py-20">
        <Container size="default">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
              Talep formu
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-3">Biz seni arayalım</h2>
            <p className="text-ink/65 mt-4 max-w-md mx-auto">
              Formu doldur, kurumsal ekibimiz 24 saat içinde sana ulaşsın.
            </p>
          </div>

          {sent ? (
            <div className="bg-sand border border-ink/10 p-10 text-center max-w-xl mx-auto">
              <MoonIcon size={28} className="text-gold mx-auto mb-3 animate-float" />
              <h3 className="font-display text-2xl">Talebin alındı.</h3>
              <p className="text-ink/65 text-sm mt-3">
                Kurumsal ekibimiz 24 saat içinde dönüş yapacak.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="max-w-2xl mx-auto bg-sand border border-ink/10 p-7 md:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FormInput
                  label="Şirket Adı"
                  required
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                />
                <FormInput
                  label="Ad Soyad"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <FormInput
                  label="E-posta"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <FormInput
                  label="Telefon"
                  required
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
                  Tahmini adet
                </span>
                <select
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  className="w-full bg-sand-soft border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
                >
                  <option>25-50</option>
                  <option>50-100</option>
                  <option>100-250</option>
                  <option>250-500</option>
                  <option>500+</option>
                </select>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
                  Notlar (tarih, bütçe, içerik tercihi)
                </span>
                <textarea
                  rows={4}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full bg-sand-soft border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-sand hover:bg-ink-soft py-3.5 text-[11px] uppercase tracking-wider-2 font-medium transition"
              >
                Talebi Gönder
              </button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}

function FormInput({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-sand-soft border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
      />
    </label>
  );
}
