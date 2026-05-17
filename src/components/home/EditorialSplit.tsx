"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import MoonIcon from "../ui/MoonIcon";

export default function EditorialSplit() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <Container size="wide">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] order-2 md:order-1"
          >
            <Image
              src="/images/products/diffuser-cream.jpg"
              alt="Lunora atölyesinden Luna Difüzör"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2"
          >
            <MoonIcon size={22} className="text-gold mb-4" />
            <span className="text-[10px] uppercase tracking-wider-3 text-ink/50">
              Atölyemizden
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-3">
              Söğüt'te, üç günlük bir <span className="italic">pişirim</span>.
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed">
              Luna difüzör, atölyemizde üç gün süren bir üretim sürecinin son halidir. Yerel kil,
              feldspat ve kuvars karışımıyla elde dökülür; üç ayrı pişirimle mat, dokulu yüzeyine
              kavuşur. Altın bant her bir parçaya tek tek elle uygulanır — bu yüzden hiçbir iki
              difüzör birebir aynı değildir.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-display text-3xl text-gold">3 gün</div>
                <div className="text-[10px] uppercase tracking-wider-2 text-ink/50">üretim</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">300 ml</div>
                <div className="text-[10px] uppercase tracking-wider-2 text-ink/50">hazne</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">8 saat</div>
                <div className="text-[10px] uppercase tracking-wider-2 text-ink/50">çalışma</div>
              </div>
            </div>
            <div className="mt-10">
              <Button href="/urun/luna-seramik-difuzor-navy" variant="primary">
                Luna Difüzörü Gör
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
