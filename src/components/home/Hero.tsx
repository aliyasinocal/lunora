"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MoonIcon from "../ui/MoonIcon";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-sand">
      {/* decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[58%] top-0 bottom-0 w-px bg-ink/5 hidden lg:block" />
        <div className="absolute left-0 top-0 right-0 h-px bg-ink/5" />
      </div>

      <div className="relative grid lg:grid-cols-[1.05fr_1fr] min-h-[760px] lg:min-h-[800px] lg:max-h-[900px] lg:h-[calc(100vh-160px)]">
        {/* LEFT — text on cream */}
        <motion.div
          style={{ y: textY }}
          className="relative flex flex-col justify-center px-6 md:px-14 lg:px-20 py-20 lg:py-16 z-10"
        >
          {/* Vertical brand line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 [writing-mode:vertical-rl] rotate-180 text-[9px] uppercase tracking-wider-3 text-ink/45"
          >
            <span>Lunora · Est. MMXXIV</span>
            <span className="w-px h-10 bg-ink/25" />
            <span>Söğüt · Türkiye</span>
          </motion.div>

          <div className="max-w-2xl xl:pl-12">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <MoonIcon size={20} className="text-gold animate-float" />
              <span className="gold-line w-10" />
              <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
                2026 İmza Koleksiyonu
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-display text-[52px] md:text-[68px] lg:text-[80px] xl:text-[96px] leading-[0.95] tracking-[-0.02em] text-ink">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Dur.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                <span className="italic font-light text-gold">Nefes</span> al.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block relative"
              >
                Kendine{" "}
                <span className="relative inline-block">
                  dön.
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    viewBox="0 0 180 12"
                    className="absolute -bottom-3 left-0 w-full h-3 hidden md:block"
                  >
                    <motion.path
                      d="M2 6 Q 45 1, 90 6 T 178 6"
                      stroke="var(--color-gold)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.95 }}
              className="mt-10 text-ink/70 leading-relaxed max-w-md text-[15px] md:text-base"
            >
              Lunora; evinin içinde sana ait sakin bir alan yaratmak için tasarlanmış{" "}
              <span className="text-ink">el yapımı ritüel objeleri</span> sunar.
              Mum, tütsü, vücut yağı ve daha fazlası — doğal, sürdürülebilir, sınırlı parti üretim.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                href="/koleksiyonlar/essence-of-calm"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-ink text-sand hover:bg-ink-soft text-[11px] uppercase tracking-wider-2 font-medium transition-all duration-500"
              >
                Koleksiyonu Keşfet
                <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
              <Link
                href="/hikayemiz"
                className="inline-flex items-center gap-2 px-8 py-4 border border-ink/25 hover:border-ink hover:bg-ink/5 text-[11px] uppercase tracking-wider-2 font-medium transition-all duration-500"
              >
                Hikâyemiz
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-14 lg:mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-ink/15 pt-7"
            >
              {[
                { num: "32+", label: "Ritüel objesi" },
                { num: "%100", label: "Doğal içerik" },
                { num: "5", label: "Showroom" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl text-ink leading-none">
                    {s.num}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider-2 text-ink/55 mt-2.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — image */}
        <div className="relative h-[58vh] lg:h-auto bg-ink overflow-hidden">
          <motion.div
            style={{ scale: imageScale, y: imageY }}
            className="absolute inset-0"
          >
            <Image
              src="/images/products/essence-set-navy.jpg"
              alt="Essence of Calm Ritüel Seti"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          {/* gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ink/5 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

          {/* Vertical text — desktop */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="hidden lg:flex absolute top-10 right-10 flex-col items-center gap-3 [writing-mode:vertical-rl] text-[10px] uppercase tracking-wider-3 text-sand/65"
          >
            <span>MMXXVI</span>
            <span className="w-px h-12 bg-sand/30" />
            <span>Essence of Calm</span>
          </motion.div>

          {/* Top-left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-10 left-10 flex items-center gap-3 text-sand/70"
          >
            <span className="w-8 h-px bg-gold" />
            <span className="text-[10px] uppercase tracking-wider-3">Limited</span>
          </motion.div>

          {/* Floating product card — bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 lg:bottom-8 lg:left-auto lg:right-8 lg:max-w-[320px]"
          >
            <Link
              href="/urun/essence-of-calm-ritual-seti-navy"
              className="group flex items-center gap-3 bg-ink/55 backdrop-blur-md border border-sand/15 hover:border-gold/60 p-3.5 hover:bg-ink/75 transition-all duration-500"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse flex-shrink-0" />
              <div className="flex-1 min-w-0 text-left">
                <div className="text-[9px] uppercase tracking-wider-2 text-gold/90">
                  Bestseller · 4 parça
                </div>
                <div className="font-serif text-sm text-sand truncate mt-0.5">
                  Essence of Calm Ritüel Seti
                </div>
              </div>
              <div className="text-sand text-sm whitespace-nowrap font-medium">4.850 ₺</div>
              <span className="text-gold group-hover:translate-x-1 transition flex-shrink-0">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee promise strip */}
      <div className="bg-ink-deep text-sand border-y border-sand/10 py-4 overflow-hidden">
        <div className="marquee">
          <PromiseRow />
          <PromiseRow ariaHidden />
        </div>
      </div>
    </section>
  );
}

function PromiseRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  const items = [
    "El yapımı · Söğüt atölyemizden",
    "Doğal içerik · Vegan formüller",
    "Sürdürülebilir ambalaj",
    "Sınırlı parti üretim",
    "24 saatte kargo · Türkiye geneli",
    "Hediye paketleme ücretsiz",
  ];
  return (
    <div className="marquee-content" aria-hidden={ariaHidden}>
      {items.map((m, i) => (
        <span
          key={i}
          className="text-[10px] uppercase tracking-wider-2 text-sand/70 whitespace-nowrap flex items-center gap-3"
        >
          <span className="text-gold">✦</span>
          {m}
        </span>
      ))}
    </div>
  );
}
