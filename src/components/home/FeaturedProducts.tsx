import { products } from "@/data/products";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProductGrid from "../product/ProductGrid";
import Button from "../ui/Button";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.isBestseller).slice(0, 4);
  return (
    <section className="py-24 md:py-32 bg-sand">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Bestseller"
            title="Markanın imzası"
            subtitle="Lunora topluluğunun en çok evlerinin köşesine taşıdığı parçalar."
            align="left"
          />
          <Button href="/urunler" variant="ghost" className="self-start md:self-end">
            Tümünü Gör →
          </Button>
        </div>
        <ProductGrid products={featured} columns={4} priorityCount={2} />
      </Container>
    </section>
  );
}
