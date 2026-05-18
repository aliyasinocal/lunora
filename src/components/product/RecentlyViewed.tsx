"use client";

import { useRecentlyViewed } from "@/lib/recently-viewed-context";
import { products } from "@/data/products";
import Container from "../ui/Container";
import ProductGrid from "./ProductGrid";

type Props = {
  excludeId?: string;
};

export default function RecentlyViewed({ excludeId }: Props) {
  const { recent } = useRecentlyViewed();
  const list = recent
    .filter((id) => id !== excludeId)
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => !!p)
    .slice(0, 4);

  if (list.length === 0) return null;

  return (
    <section className="bg-sand-soft py-16 md:py-20">
      <Container size="wide">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
              Senin için
            </span>
            <h2 className="font-display text-2xl md:text-3xl mt-2">Son baktıkların</h2>
          </div>
        </div>
        <ProductGrid products={list} columns={4} />
      </Container>
    </section>
  );
}
