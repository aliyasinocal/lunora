"use client";

import Container from "@/components/ui/Container";
import MoonIcon from "@/components/ui/MoonIcon";
import Button from "@/components/ui/Button";
import ProductGrid from "@/components/product/ProductGrid";
import { useFavorites } from "@/lib/favorites-context";
import { products } from "@/data/products";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favProducts = favorites
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => !!p);

  return (
    <Container size="wide" className="py-16 md:py-20">
      <div className="text-center mb-12">
        <MoonIcon size={22} className="text-gold mx-auto mb-4" />
        <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">Senin köşen</span>
        <h1 className="font-display text-4xl md:text-5xl mt-3">Favorilerin</h1>
        <p className="text-ink/65 mt-4 max-w-md mx-auto">
          Gözüne hoş gelen, bir gün için ayırdığın ya da hediye düşünmeye başladığın
          parçaları burada toplayabilirsin.
        </p>
      </div>

      {favProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-serif text-2xl text-ink/60 mb-6">
            Henüz favorin yok.
          </p>
          <Button href="/urunler" variant="primary">
            Ürünleri Keşfet
          </Button>
        </div>
      ) : (
        <ProductGrid products={favProducts} columns={4} />
      )}
    </Container>
  );
}
