import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ProductFilters from "@/components/product/ProductFilters";

export const metadata = {
  title: "Tüm Ürünler — Lunora",
  description: "Lunora'nın tüm ritüel objelerini keşfet.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Atölyemizden"
        title="Tüm ritüel objeleri"
        subtitle="Mum, tütsü, vücut yağı, gua sha, difüzör ve daha fazlası. Filtrele, paletini seç, ritüelini kur."
      />
      <Container size="wide" className="py-16">
        <ProductFilters />
      </Container>
    </>
  );
}
