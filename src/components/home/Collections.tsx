"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { collections } from "@/data/categories";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Collections() {
  return (
    <section className="py-24 md:py-32 bg-sand-soft">
      <Container size="wide">
        <SectionHeading
          eyebrow="Koleksiyonlar"
          title="İki imza palet, üç ritüel"
          subtitle="Lacivertin gece sakinliği ya da kremin sabah ışığı; Lunora seninle hangi saatlerde olmak istiyor?"
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5 md:gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/koleksiyonlar/${col.slug}`}
                className="group block relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 ${
                    col.theme === "navy"
                      ? "bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
                      : "bg-gradient-to-t from-ink/60 via-ink/10 to-transparent"
                  }`}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-sand">
                  <span className="text-[10px] uppercase tracking-wider-3 text-gold mb-2">
                    {col.subtitle}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">{col.name}</h3>
                  <p className="text-sm text-sand/75 mt-3 max-w-xs">{col.description}</p>
                  <span className="mt-6 text-[10px] uppercase tracking-wider-2 flex items-center gap-2 group-hover:text-gold transition">
                    Koleksiyonu Gör <span className="group-hover:translate-x-1 transition">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
