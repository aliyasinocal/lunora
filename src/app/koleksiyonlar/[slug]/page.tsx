import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/product/ProductGrid";
import MoonIcon from "@/components/ui/MoonIcon";
import { collections } from "@/data/categories";
import { getProductsByCollection } from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionDetailPage(
  props: PageProps<"/koleksiyonlar/[slug]">
) {
  const { slug } = await props.params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);
  const isNavy = collection.theme === "navy";

  return (
    <>
      <section className={isNavy ? "bg-ink text-sand" : "bg-sand-soft text-ink"}>
        <Container size="wide" className="py-16 md:py-24">
          {/* Breadcrumb */}
          <nav
            className={`text-[10px] uppercase tracking-wider-2 flex items-center gap-2 mb-10 ${
              isNavy ? "text-sand/50" : "text-ink/50"
            }`}
          >
            <Link href="/" className={isNavy ? "hover:text-sand" : "hover:text-ink"}>
              Anasayfa
            </Link>
            <span>/</span>
            <Link
              href="/koleksiyonlar"
              className={isNavy ? "hover:text-sand" : "hover:text-ink"}
            >
              Koleksiyonlar
            </Link>
            <span>/</span>
            <span className={isNavy ? "text-sand" : "text-ink"}>{collection.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
            {/* Text */}
            <div>
              <MoonIcon size={22} className="text-gold mb-5" />
              <span className="text-[10px] uppercase tracking-wider-3 text-gold">
                Lunora Koleksiyonu
              </span>
              <h1
                className={`font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mt-4 ${
                  isNavy ? "text-sand" : "text-ink"
                }`}
              >
                {collection.name}
              </h1>
              <p
                className={`mt-4 font-display italic text-xl md:text-2xl ${
                  isNavy ? "text-sand/70" : "text-ink/60"
                }`}
              >
                {collection.subtitle}
              </p>
              <div className="gold-line w-12 my-7" />
              <p
                className={`leading-relaxed max-w-md ${
                  isNavy ? "text-sand/70" : "text-ink/65"
                }`}
              >
                {collection.description}
              </p>
              <div
                className={`mt-8 grid grid-cols-3 gap-4 max-w-sm pt-6 border-t ${
                  isNavy ? "border-sand/15" : "border-ink/15"
                }`}
              >
                <div>
                  <div className={`font-display text-2xl ${isNavy ? "text-sand" : "text-ink"}`}>
                    {products.length}
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-wider-2 mt-1 ${
                      isNavy ? "text-sand/55" : "text-ink/55"
                    }`}
                  >
                    Parça
                  </div>
                </div>
                <div>
                  <div className={`font-display text-2xl ${isNavy ? "text-sand" : "text-ink"}`}>
                    %100
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-wider-2 mt-1 ${
                      isNavy ? "text-sand/55" : "text-ink/55"
                    }`}
                  >
                    El Yapımı
                  </div>
                </div>
                <div>
                  <div className={`font-display text-2xl ${isNavy ? "text-sand" : "text-ink"}`}>
                    Söğüt
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-wider-2 mt-1 ${
                      isNavy ? "text-sand/55" : "text-ink/55"
                    }`}
                  >
                    Atölye
                  </div>
                </div>
              </div>
            </div>

            {/* Image — kept at natural aspect, no stretching */}
            <div className="relative aspect-[4/5] max-w-[520px] mx-auto w-full">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className={`absolute -bottom-3 -right-3 px-4 py-2 text-[10px] uppercase tracking-wider-2 ${
                  isNavy ? "bg-gold text-ink" : "bg-ink text-sand"
                }`}
              >
                {collection.subtitle}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand">
        <Container size="wide" className="py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
                {collection.name} koleksiyonu
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-2">
                {products.length} parça
              </h2>
            </div>
            <Link
              href="/urunler"
              className="text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
            >
              Tüm Ürünler →
            </Link>
          </div>
          <ProductGrid products={products} columns={3} priorityCount={3} />
        </Container>
      </section>
    </>
  );
}
