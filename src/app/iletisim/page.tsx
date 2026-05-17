"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { cn } from "@/lib/format";

const topics = [
  "Genel Bilgi",
  "Sipariş Sorunu",
  "İade & Değişim",
  "Toptan Satış",
  "Atölye / Workshop",
  "Kurumsal Hediye",
  "İşbirliği",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Bize yaz"
        title="Bir nefes uzaktayız."
        subtitle="Mesajını okuyup en geç iki iş günü içinde dönüş yapıyoruz."
      />

      <Container size="wide" className="py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">
          {/* Info */}
          <aside className="space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-wider-3 text-gold">
                Merkez
              </span>
              <h2 className="font-display text-3xl mt-2 leading-tight">
                Lunora Ev Ritüelleri A.Ş.
              </h2>
              <p className="text-sm text-ink/65 mt-3 leading-relaxed">
                Söğüt Atölyesi & Genel Merkez
                <br />
                Yıldırım Mh. Atatürk Cad. No: 88
                <br />
                Söğüt / Bilecik
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <Row icon={<Phone size={15} />} label="+90 850 240 88 12" />
              <Row icon={<Mail size={15} />} label="merhaba@lunora.com.tr" />
              <Row icon={<MapPin size={15} />} label="Pzt - Cmt · 09:00 - 18:00" />
            </div>

            <div className="gold-line w-12" />

            <div>
              <span className="text-[10px] uppercase tracking-wider-3 text-ink/55 block mb-3">
                Sosyal medya
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  className="w-10 h-10 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-sand hover:border-ink transition"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://wa.me/905502408812"
                  target="_blank"
                  rel="noopener"
                  className="w-10 h-10 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-sand hover:border-ink transition"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="bg-sand-soft border border-ink/10 p-7 md:p-10">
            {submitted ? (
              <div className="py-16 text-center">
                <span className="inline-block w-14 h-14 rounded-full bg-gold/20 mb-5 animate-float text-gold flex items-center justify-center text-2xl">
                  ✦
                </span>
                <h3 className="font-display text-3xl">Mesajın bize ulaştı.</h3>
                <p className="text-ink/65 mt-3 max-w-md mx-auto">
                  En geç iki iş günü içinde geri dönüş yapıyoruz. Acil bir konuysa
                  WhatsApp hattımız üzerinden de bize ulaşabilirsin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-2xl mb-2">Mesajını yaz</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Adın"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="E-posta"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
                    Konu
                  </span>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full bg-sand border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
                  >
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
                    Mesajın
                  </span>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-sand border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition resize-none"
                  />
                </div>
                <label className="flex items-start gap-2 text-[11px] text-ink/55 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 accent-ink" />
                  <span>
                    Lunora ile bilgilerimin paylaşılmasını onaylıyorum. Verilerim
                    yalnızca size cevap verebilmek için kullanılır.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 bg-ink text-sand hover:bg-ink-soft py-3.5 text-[11px] uppercase tracking-wider-2 font-medium transition"
                >
                  Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gold">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Field({
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
    <label className={cn("block")}>
      <span className="text-[10px] uppercase tracking-wider-2 text-ink/55 block mb-1.5">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-sand border border-ink/15 px-4 py-3 text-sm focus:border-gold outline-none transition"
      />
    </label>
  );
}
