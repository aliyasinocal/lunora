import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MoonIcon from "@/components/ui/MoonIcon";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/jurnal/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı — Lunora" };
  return { title: `${post.title} — Lunora Jurnal`, description: post.excerpt };
}

export default async function JournalPostPage(props: PageProps<"/jurnal/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-sand-soft py-16 md:py-24">
        <Container size="narrow" className="text-center">
          <MoonIcon size={20} className="text-gold mx-auto mb-5" />
          <span className="text-[10px] uppercase tracking-wider-3 text-gold">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3 text-[11px] uppercase tracking-wider-2 text-ink/55">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>
      </section>

      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-sand-deep">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container size="narrow" className="py-16 md:py-24">
        <article className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return (
                <h3 key={i} className="font-display text-2xl md:text-3xl mt-12 mb-4 leading-tight">
                  {para.replace(/\*\*/g, "")}
                </h3>
              );
            }
            const parts = para.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i} className="text-ink/80 leading-[1.85] my-5 text-[17px]">
                {parts.map((p, j) =>
                  p.startsWith("**") && p.endsWith("**") ? (
                    <strong key={j} className="text-ink font-serif text-xl">
                      {p.replace(/\*\*/g, "")}
                    </strong>
                  ) : (
                    p
                  )
                )}
              </p>
            );
          })}
        </article>

        <div className="gold-line w-16 mx-auto my-16" />
        <div className="text-center">
          <p className="font-display text-2xl italic">"Dur. Nefes al. Kendine dön."</p>
          <p className="text-[11px] uppercase tracking-wider-2 text-ink/55 mt-3">
            — Lunora
          </p>
        </div>
      </Container>

      <section className="bg-sand-soft py-16 md:py-20">
        <Container size="wide">
          <h2 className="font-display text-3xl mb-10 text-center">Devam okumalar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/jurnal/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="pt-5">
                  <span className="text-[10px] uppercase tracking-wider-2 text-ink/55">
                    {p.category}
                  </span>
                  <h3 className="font-serif text-lg mt-2 leading-tight group-hover:text-gold transition">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
