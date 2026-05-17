"use client";

import { useState, useMemo } from "react";
import { categories, collections } from "@/data/categories";
import { products } from "@/data/products";
import ProductGrid from "./ProductGrid";
import { cn } from "@/lib/format";
import { ChevronDown } from "lucide-react";

type SortKey = "featured" | "price-asc" | "price-desc" | "name" | "newest";

const sortLabels: Record<SortKey, string> = {
  featured: "Öne Çıkanlar",
  "price-asc": "Fiyat: Düşük → Yüksek",
  "price-desc": "Fiyat: Yüksek → Düşük",
  name: "İsme Göre A → Z",
  newest: "En Yeniler",
};

type Props = {
  initialCategory?: string;
};

export default function ProductFilters({ initialCategory }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(initialCategory ?? "all");
  const [collection, setCollection] = useState<string>("all");
  const [theme, setTheme] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sort, setSort] = useState<SortKey>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = products;
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (collection !== "all") list = list.filter((p) => p.collection === collection);
    if (theme !== "all") list = list.filter((p) => p.theme === theme);
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name, "tr"));
        break;
      case "newest":
        list = [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        list = [...list].sort(
          (a, b) =>
            (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0) ||
            (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        );
    }
    return list;
  }, [search, category, collection, theme, priceRange, sort]);

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-10">
      {/* Filters */}
      <aside className="lg:sticky lg:top-32 lg:self-start space-y-6 text-sm">
        <div className="lg:hidden">
          <button
            onClick={() => setShowFilters((s) => !s)}
            className="w-full flex items-center justify-between border border-ink/20 py-3 px-4 text-[11px] uppercase tracking-wider-2"
          >
            Filtreler{" "}
            <ChevronDown size={14} className={cn("transition", showFilters && "rotate-180")} />
          </button>
        </div>

        <div className={cn("space-y-6", "lg:block", !showFilters && "hidden lg:block")}>
          <div>
            <label className="text-[10px] uppercase tracking-wider-2 text-ink/50 block mb-2">
              Ara
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ürün ara…"
              className="w-full bg-transparent border-b border-ink/20 py-2 text-sm focus:border-gold outline-none transition"
            />
          </div>

          <FilterGroup title="Kategori">
            <RadioRow
              name="category"
              value="all"
              checked={category === "all"}
              onChange={setCategory}
              label="Tümü"
            />
            {categories.map((c) => (
              <RadioRow
                key={c.slug}
                name="category"
                value={c.slug}
                checked={category === c.slug}
                onChange={setCategory}
                label={c.name}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Koleksiyon">
            <RadioRow
              name="collection"
              value="all"
              checked={collection === "all"}
              onChange={setCollection}
              label="Tümü"
            />
            {collections.map((c) => (
              <RadioRow
                key={c.slug}
                name="collection"
                value={c.slug}
                checked={collection === c.slug}
                onChange={setCollection}
                label={c.name}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Palet">
            <RadioRow
              name="theme"
              value="all"
              checked={theme === "all"}
              onChange={setTheme}
              label="Tümü"
            />
            <RadioRow
              name="theme"
              value="navy"
              checked={theme === "navy"}
              onChange={setTheme}
              label="Lacivert"
            />
            <RadioRow
              name="theme"
              value="cream"
              checked={theme === "cream"}
              onChange={setTheme}
              label="Krem"
            />
          </FilterGroup>

          <FilterGroup title="Fiyat (TL)">
            <div className="flex items-center gap-2 text-xs">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full bg-transparent border-b border-ink/20 py-1.5 outline-none focus:border-gold"
              />
              <span>—</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full bg-transparent border-b border-ink/20 py-1.5 outline-none focus:border-gold"
              />
            </div>
          </FilterGroup>

          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
              setCollection("all");
              setTheme("all");
              setPriceRange([0, 10000]);
            }}
            className="text-[10px] uppercase tracking-wider-2 text-ink/60 hover:text-ink underline-offset-4 hover:underline transition"
          >
            Filtreleri Temizle
          </button>
        </div>
      </aside>

      {/* Products */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8">
          <span className="text-[11px] uppercase tracking-wider-2 text-ink/60">
            {filtered.length} ürün
          </span>
          <div className="relative inline-block">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="appearance-none bg-transparent border border-ink/20 px-4 py-2 pr-9 text-[11px] uppercase tracking-wider-2 cursor-pointer focus:border-gold outline-none"
            >
              {Object.entries(sortLabels).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
            <ChevronDown
              size={12}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-serif text-2xl text-ink/60">Sonuç bulunamadı.</p>
            <p className="text-sm text-ink/50 mt-2">Filtreleri biraz daha açabilir misin?</p>
          </div>
        ) : (
          <ProductGrid products={filtered} columns={3} priorityCount={3} />
        )}
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-wider-2 text-ink/50 mb-3">{title}</h4>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function RadioRow({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <span
        className={cn(
          "w-3 h-3 border border-ink/30 transition",
          checked && "bg-ink border-ink"
        )}
      />
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="hidden"
      />
      <span
        className={cn(
          "text-sm transition",
          checked ? "text-ink" : "text-ink/65 group-hover:text-ink"
        )}
      >
        {label}
      </span>
    </label>
  );
}
