import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Jurnal — Lunora",
  description: "Lunora jurnali: ritüel rehberleri, bileşen notları ve atölye günlükleri.",
};

export default function JournalPage() {
  const [hero, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        eyebrow="Lunora Jurnali"
        title="Ritüel, atölye ve sözcükler"
        subtitle="Akşamlarımızı yumuşatan rehberler, bileşenlerin hikâyesi ve Söğüt'teki atölyemizden notlar."
      />
      <Container size="wide" className="py-16 md:py-24">
        {/* Featured */}
        <Link
          href={`/jurnal/${hero.slug}`}
          className="group grid md:grid-cols-2 gap-8 md:gap-14 items-center mb-20"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-sand-deep">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider-3 text-gold">
              {hero.category}
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight group-hover:text-gold transition">
              {hero.title}
            </h2>
            <p className="text-ink/65 mt-5 leading-relaxed">{hero.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-wider-2 text-ink/55">
              <span>{hero.author}</span>
              <span>·</span>
              <span>{formatDate(hero.date)}</span>
              <span>·</span>
              <span>{hero.readingTime}</span>
            </div>
            <span className="inline-block mt-6 text-[11px] uppercase tracking-wider-2 border-b border-current pb-1 group-hover:text-gold">
              Yazıyı oku →
            </span>
          </div>
        </Link>

        <div className="gold-line w-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
          {rest.map((post) => (
            <Link key={post.slug} href={`/jurnal/${post.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <span className="text-[10px] uppercase tracking-wider-2 text-ink/55">
                  {post.category} · {formatDate(post.date)}
                </span>
                <h3 className="font-serif text-xl mt-2 leading-tight group-hover:text-gold transition">
                  {post.title}
                </h3>
                <p className="text-sm text-ink/65 mt-2 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
