import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ProductFilters from "@/components/product/ProductFilters";
import { categories } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage(props: PageProps<"/kategori/[slug]">) {
  const { slug } = await props.params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Kategori · Lunora`}
        title={category.name}
        subtitle={category.intro ?? category.description}
      />
      <Container size="wide" className="py-16">
        <ProductFilters initialCategory={category.slug} />
      </Container>
    </>
  );
}
