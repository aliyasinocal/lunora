"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

const pillars = [
  {
    icon: "✦",
    title: "Zihni Sakinleştir",
    text: "Olumlama kartları, defterler ve meditatif kompozisyonlar.",
  },
  {
    icon: "❋",
    title: "Bedenini Rahatlat",
    text: "Soğuk preslenmiş yağlar, gua sha taşları, banyo tuzları.",
  },
  {
    icon: "✺",
    title: "Ritüelini Zenginleştir",
    text: "Mum, tütsü, difüzör — kokunun belleğe işlediği objeler.",
  },
  {
    icon: "❅",
    title: "Doğal İçerikler",
    text: "Soya, jojoba, argan; her formül bilinçli içerikle yazıldı.",
  },
  {
    icon: "❖",
    title: "El Yapımı Tasarım",
    text: "Söğüt'teki atölyemizde küçük partilerle elde üretildi.",
  },
  {
    icon: "❍",
    title: "Sürdürülebilir Yaşam",
    text: "Yeniden kullanılabilir ambalaj, geri dönüşümlü kutu.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-ink text-sand py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 wave-divider opacity-20 pointer-events-none" />
      <Container size="wide">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-wider-3 text-gold">
            Lunora Sözü
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            Altı temel, tek bir ritüel
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-sand/10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="bg-ink p-8 md:p-10 flex flex-col items-center text-center hover:bg-ink-soft transition duration-700"
            >
              <div className="text-3xl text-gold mb-4">{p.icon}</div>
              <h3 className="font-serif text-lg mb-2 tracking-wide">{p.title}</h3>
              <p className="text-sand/60 text-xs leading-relaxed max-w-[200px]">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
