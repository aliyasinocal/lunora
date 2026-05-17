import { notFound } from "next/navigation";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/product/ProductGrid";
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
      <section className={`relative ${isNavy ? "bg-ink text-sand" : "bg-sand-soft text-ink"}`}>
        <div className="relative h-[60vh] min-h-[480px]">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className={`absolute inset-0 ${
              isNavy ? "bg-gradient-to-t from-ink/95 via-ink/40 to-ink/60" : "bg-gradient-to-t from-sand/90 via-sand/30 to-sand/40"
            }`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span
              className={`text-[10px] uppercase tracking-wider-3 ${
                isNavy ? "text-gold" : "text-gold"
              }`}
            >
              {collection.subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl">
              {collection.name}
            </h1>
            <p className={`mt-6 max-w-2xl text-sm md:text-base ${isNavy ? "text-sand/80" : "text-ink/70"}`}>
              {collection.description}
            </p>
          </div>
        </div>
      </section>
      <Container size="wide" className="py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl">{products.length} parça</h2>
          <span className="text-[11px] uppercase tracking-wider-2 text-ink/50">
            {collection.name} koleksiyonu
          </span>
        </div>
        <ProductGrid products={products} columns={4} priorityCount={4} />
      </Container>
    </>
  );
}
