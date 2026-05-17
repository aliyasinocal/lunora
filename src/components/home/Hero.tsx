"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MoonIcon from "../ui/MoonIcon";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink text-sand">
      <div className="relative h-[88vh] min-h-[640px] grid md:grid-cols-2">
        {/* Left text */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <MoonIcon size={28} className="text-gold mb-6 animate-float" />
            <span className="text-[10px] uppercase tracking-wider-3 text-sand/60">
              Essence of Calm · 2026 Koleksiyonu
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-5">
              Dur. <span className="italic">Nefes</span> al.
              <br />
              Kendine dön.
            </h1>
            <p className="mt-6 text-sand/70 leading-relaxed max-w-md">
              Lunora; evinin içinde sana ait sakin bir alan yaratmak için tasarlanmış ritüel
              objeleri sunar. Mum, tütsü, vücut yağı ve daha fazlası — el yapımı, doğal,
              sürdürülebilir.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/koleksiyonlar/essence-of-calm" variant="gold" size="lg">
                Koleksiyonu Keşfet
              </Button>
              <Button href="/hikayemiz" variant="outline" size="lg" className="text-sand border-sand/30">
                Hikâyemiz
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6 text-[10px] uppercase tracking-wider-2 text-sand/50">
              <span>El yapımı</span>
              <span className="w-1 h-1 bg-gold rounded-full" />
              <span>Doğal içerik</span>
              <span className="w-1 h-1 bg-gold rounded-full" />
              <span>Sınırlı parti üretim</span>
            </div>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full"
        >
          <Image
            src="/images/products/essence-set-navy.jpg"
            alt="Lunora Essence of Calm ritüel seti"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ink/10 to-ink md:bg-gradient-to-l md:from-transparent md:to-ink/30" />
          <Link
            href="/urun/essence-of-calm-ritual-seti-navy"
            className="hidden lg:flex absolute bottom-12 right-12 items-center gap-4 bg-ink/70 backdrop-blur-md border border-sand/15 px-5 py-4 hover:bg-ink/90 transition group"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <div>
              <div className="text-[10px] uppercase tracking-wider-2 text-sand/60">Bestseller</div>
              <div className="font-serif text-base">Essence of Calm Ritüel Seti</div>
            </div>
            <span className="ml-3 text-gold group-hover:translate-x-1 transition">→</span>
          </Link>
        </motion.div>
      </div>

      <div className="wave-divider h-10 w-full opacity-50" />
    </section>
  );
}
