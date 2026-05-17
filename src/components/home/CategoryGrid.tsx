import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function CategoryGrid() {
  return (
    <section className="bg-sand-soft py-24 md:py-32">
      <Container size="wide">
        <SectionHeading
          eyebrow="Keşfet"
          title="Ritüel için kategoriler"
          subtitle="Yatak odanı, banyonu, çalışma köşeni — her alanı yumuşatacak parçalar."
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="group block relative aspect-[4/5] overflow-hidden bg-ink"
            >
              <Image
                src={cat.hero || "/images/products/essence-set-navy.jpg"}
                alt={cat.name}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
              <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end text-sand">
                <h3 className="font-serif text-xl md:text-2xl leading-tight">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-sand/70 mt-1.5 line-clamp-2 leading-snug">
                  {cat.description}
                </p>
                <span className="mt-3 text-[10px] uppercase tracking-wider-2 text-gold group-hover:text-sand transition flex items-center gap-1">
                  Keşfet <span className="group-hover:translate-x-1 transition">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
