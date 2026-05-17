"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../ui/Logo";
import { useCart } from "@/lib/cart-context";
import { useFavorites } from "@/lib/favorites-context";
import { useAuth } from "@/lib/auth-context";
import { categories, collections } from "@/data/categories";
import CartDrawer from "../cart/CartDrawer";
import SearchOverlay from "./SearchOverlay";
import { cn } from "@/lib/format";

const mainLinks: { href: string; label: string; mega?: "categories" | "collections" }[] = [
  { href: "/urunler", label: "Tüm Ürünler" },
  { href: "/koleksiyonlar", label: "Koleksiyonlar", mega: "collections" },
  { href: "#", label: "Kategoriler", mega: "categories" },
  { href: "/hikayemiz", label: "Hikâyemiz" },
  { href: "/jurnal", label: "Jurnal" },
  { href: "/magazalar", label: "Mağazalar" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const { itemCount, setOpen } = useCart();
  const { favorites } = useFavorites();
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-sand/95 backdrop-blur-md border-b border-ink/10"
            : "bg-sand border-b border-transparent"
        )}
      >
        {/* Top row: burger / icons (mobile) ── icons (desktop) + centered logo */}
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 py-4 md:py-5 flex items-center">
          {/* Left icons (desktop) / burger (mobile) */}
          <div className="flex-1 flex items-center gap-5">
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü aç"
            >
              <Menu size={22} />
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Ara"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
            >
              <Search size={16} /> Ara
            </button>
            <Link
              href="/magazalar"
              className="hidden lg:inline-block text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
            >
              Mağazalar
            </Link>
            <Link
              href="/iletisim"
              className="hidden lg:inline-block text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
            >
              İletişim
            </Link>
          </div>

          {/* Center logo */}
          <div className="flex justify-center px-4">
            <Logo />
          </div>

          {/* Right icons */}
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Ara"
              className="md:hidden hover:text-gold transition"
            >
              <Search size={18} />
            </button>
            <Link
              href={user ? "/hesabim" : "/giris"}
              aria-label={user ? "Hesabım" : "Giriş yap"}
              className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
            >
              <User size={15} />
              <span className="hidden lg:inline">{user ? "Hesabım" : "Giriş"}</span>
            </Link>
            <Link
              href="/favoriler"
              aria-label="Favoriler"
              className="relative hover:text-gold transition"
            >
              <Heart size={18} />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-gold text-ink text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Sepeti aç"
              className="relative hover:text-gold transition"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-gold text-ink text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom nav row (desktop only) */}
        <nav
          className="hidden md:flex relative items-center justify-center border-t border-ink/10"
          onMouseLeave={() => setOpenMega(null)}
        >
          <ul className="flex items-center gap-8 lg:gap-10 py-3.5 text-[11px] uppercase tracking-wider-2">
            {mainLinks.map((link) => (
              <li
                key={link.label}
                onMouseEnter={() => link.mega && setOpenMega(link.mega)}
              >
                {link.mega ? (
                  <button className="flex items-center gap-1 hover:text-gold transition">
                    {link.label}
                    <ChevronDown size={11} className="opacity-60" />
                  </button>
                ) : (
                  <Link href={link.href} className="hover:text-gold transition">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mega menu */}
          {openMega && (
            <div className="absolute left-0 right-0 top-full bg-sand-soft border-t border-ink/10 shadow-xl">
              <div className="mx-auto max-w-[1440px] px-10 py-10">
                {openMega === "categories" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-3">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/kategori/${c.slug}`}
                        onClick={() => setOpenMega(null)}
                        className="group flex flex-col gap-1 py-1.5"
                      >
                        <span className="font-serif text-base text-ink group-hover:text-gold transition">
                          {c.name}
                        </span>
                        <span className="text-[10px] normal-case tracking-normal text-ink/55">
                          {c.description.length > 70
                            ? c.description.slice(0, 68) + "…"
                            : c.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
                {openMega === "collections" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {collections.map((col) => (
                      <Link
                        key={col.slug}
                        href={`/koleksiyonlar/${col.slug}`}
                        onClick={() => setOpenMega(null)}
                        className="group block"
                      >
                        <span className="text-[10px] uppercase tracking-wider-3 text-gold">
                          {col.subtitle}
                        </span>
                        <div className="font-display text-2xl mt-1 group-hover:text-gold transition">
                          {col.name}
                        </div>
                        <p className="text-[11px] normal-case tracking-normal text-ink/60 mt-2 leading-relaxed">
                          {col.description.slice(0, 110)}…
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-sand text-ink flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-ink/10">
            <Logo variant="compact" />
            <button onClick={() => setMobileOpen(false)} aria-label="Menüyü kapat">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col p-7 gap-6 overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-serif text-2xl"
            >
              Anasayfa
            </Link>
            {mainLinks
              .filter((l) => !l.mega || l.label === "Koleksiyonlar")
              .map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl"
                >
                  {link.label}
                </Link>
              ))}
            <div className="gold-line w-16 mt-2" />
            <div className="flex flex-col gap-3 text-sm">
              <span className="text-[10px] uppercase tracking-wider-2 text-ink/50">
                Kategoriler
              </span>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/kategori/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-ink/80 hover:text-gold transition"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <div className="gold-line w-16 mt-2" />
            <div className="flex flex-col gap-3 text-[11px] uppercase tracking-wider-2">
              <Link
                href={user ? "/hesabim" : "/giris"}
                onClick={() => setMobileOpen(false)}
              >
                {user ? "Hesabım" : "Giriş Yap"}
              </Link>
              <Link href="/iletisim" onClick={() => setMobileOpen(false)}>
                İletişim
              </Link>
              <Link href="/sss" onClick={() => setMobileOpen(false)}>
                SSS
              </Link>
            </div>
          </nav>
        </div>
      )}

      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
