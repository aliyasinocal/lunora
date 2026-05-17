import type { Product } from "@/types";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/format";

type Props = {
  products: Product[];
  columns?: 2 | 3 | 4;
  priorityCount?: number;
  className?: string;
};

export default function ProductGrid({
  products,
  columns = 4,
  priorityCount = 0,
  className,
}: Props) {
  const colClass = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns];

  return (
    <div className={cn("grid gap-x-5 gap-y-10", colClass, className)}>
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} priority={i < priorityCount} />
      ))}
    </div>
  );
}
