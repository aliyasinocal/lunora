import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { formatDate } from "@/lib/format";

export default function JournalTeaser() {
  const featured = blogPosts.slice(0, 3);
  return (
    <section className="bg-sand-soft py-24 md:py-32">
      <Container size="wide">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <SectionHeading
            eyebrow="Jurnal"
            title="Ritüele dair okumalar"
            subtitle="Notlar, atölye günlükleri ve günün her ânını yumuşatan tarifler."
            align="left"
          />
          <Link
            href="/jurnal"
            className="text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
          >
            Tüm Yazılar →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/jurnal/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <div className="text-[10px] uppercase tracking-wider-2 text-ink/50 flex items-center gap-2">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="font-serif text-xl mt-3 leading-tight group-hover:text-gold transition">
                  {post.title}
                </h3>
                <p className="text-sm text-ink/65 mt-2 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-[10px] uppercase tracking-wider-2 text-ink mt-4 inline-block">
                  Okumaya devam et →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
