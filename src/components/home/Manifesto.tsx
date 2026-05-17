"use client";

import { motion } from "framer-motion";
import MoonIcon from "../ui/MoonIcon";
import Container from "../ui/Container";

const lines = [
  "Bir ritüel,",
  "kendine ayırdığın bir saygı duruşudur.",
  "Bir mum,",
  "bir tütsü,",
  "bir nefes —",
  "geri dönmek için yeter.",
];

export default function Manifesto() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <Container size="narrow">
        <div className="text-center">
          <MoonIcon size={20} className="text-gold mx-auto mb-6" />
          <span className="text-[10px] uppercase tracking-wider-3 text-ink/50">
            Manifesto
          </span>
          <div className="mt-8 space-y-3 font-display text-3xl md:text-5xl leading-tight text-ink">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.div>
            ))}
          </div>
          <div className="gold-line w-16 mx-auto mt-10" />
        </div>
      </Container>
    </section>
  );
}
