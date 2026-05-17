import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { collections } from "@/data/categories";

export const metadata = {
  title: "Koleksiyonlar — Lunora",
  description: "Lunora'nın imza koleksiyonları: Essence of Calm, Ritual of Rest ve Moonlit Edition.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Lunora'nın imza paletleri"
        title="Üç koleksiyon, tek bir nefes"
        subtitle="Her koleksiyon belirli bir günün dilimine ve duyguya adanmıştır. Hangisinde yaşamak istediğine sen karar ver."
      />
      <Container size="wide" className="py-20 md:py-24 space-y-20 md:space-y-32">
        {collections.map((col, i) => (
          <div
            key={col.slug}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Link href={`/koleksiyonlar/${col.slug}`} className="relative aspect-[4/5] block overflow-hidden group">
              <Image
                src={col.image}
                alt={col.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </Link>
            <div>
              <span className="text-[10px] uppercase tracking-wider-3 text-gold">
                {col.subtitle}
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
                {col.name}
              </h2>
              <p className="mt-6 text-ink/70 leading-relaxed">{col.description}</p>
              <Link
                href={`/koleksiyonlar/${col.slug}`}
                className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-wider-2 border-b border-current pb-1 hover:text-gold transition"
              >
                Koleksiyonu Keşfet →
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
