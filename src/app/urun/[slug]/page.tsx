import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import ProductGrid from "@/components/product/ProductGrid";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/urun/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Ürün bulunamadı — Lunora" };
  return {
    title: `${product.name} — Lunora`,
    description: product.shortDescription,
  };
}

export default async function ProductPage(props: PageProps<"/urun/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <>
      <Container size="wide" className="pt-10 pb-6">
        <nav className="text-[11px] uppercase tracking-wider-2 text-ink/55 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-ink transition">
            Anasayfa
          </Link>
          <span>/</span>
          <Link href="/urunler" className="hover:text-ink transition">
            Ürünler
          </Link>
          <span>/</span>
          <Link href={`/kategori/${product.category}`} className="hover:text-ink transition">
            {product.category.replace(/-/g, " ")}
          </Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </Container>
      <Container size="wide" className="pb-20 md:pb-32">
        <ProductDetailClient product={product} />
      </Container>

      {related.length > 0 && (
        <section className="bg-sand-soft py-20 md:py-24">
          <Container size="wide">
            <div className="text-center mb-12">
              <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
                Belki bunlar da
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-3">
                İlgini çekebilecek diğer parçalar
              </h2>
            </div>
            <ProductGrid products={related} columns={4} />
          </Container>
        </section>
      )}
    </>
  );
}
