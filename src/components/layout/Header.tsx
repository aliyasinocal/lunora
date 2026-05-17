"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import { useCart } from "@/lib/cart-context";
import { useFavorites } from "@/lib/favorites-context";
import { useAuth } from "@/lib/auth-context";
import { categories } from "@/data/categories";
import CartDrawer from "../cart/CartDrawer";
import SearchOverlay from "./SearchOverlay";
import { cn } from "@/lib/format";

const navLinks = [
  { href: "/koleksiyonlar", label: "Koleksiyonlar" },
  { href: "/urunler", label: "Tüm Ürünler" },
  { href: "/hikayemiz", label: "Hikâyemiz" },
  { href: "/jurnal", label: "Jurnal" },
  { href: "/magazalar", label: "Mağazalar" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hoverCategories, setHoverCategories] = useState(false);
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
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 py-4 md:py-5 grid grid-cols-3 items-center gap-4">
          {/* Left: Nav (desktop) / Burger (mobile) */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-wider-2">
            <div
              className="relative"
              onMouseEnter={() => setHoverCategories(true)}
              onMouseLeave={() => setHoverCategories(false)}
            >
              <button className="hover:text-gold transition flex items-center gap-1">
                Kategoriler
              </button>
              {hoverCategories && (
                <div className="absolute left-0 top-full pt-3 z-50 w-screen max-w-[640px]">
                  <div className="bg-sand-soft border border-ink/10 shadow-2xl p-8 grid grid-cols-2 gap-x-8 gap-y-3">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/kategori/${cat.slug}`}
                        className="group flex flex-col gap-0.5"
                      >
                        <span className="font-serif text-base text-ink group-hover:text-gold transition">
                          {cat.name}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider-2 text-ink/50 normal-case">
                          {cat.description.slice(0, 60)}…
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold transition">
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden justify-self-start"
            onClick={() => setMobileOpen(true)}
            aria-label="Menüyü aç"
          >
            <Menu size={22} />
          </button>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Logo />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center justify-end gap-4 md:gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Ara"
              className="hover:text-gold transition"
            >
              <Search size={18} />
            </button>
            <Link
              href={user ? "/hesabim" : "/giris"}
              aria-label={user ? "Hesabım" : "Giriş yap"}
              className="hidden md:block hover:text-gold transition"
            >
              <User size={18} />
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
          <nav className="flex flex-col p-7 gap-6 text-base">
            <Link href="/" onClick={() => setMobileOpen(false)} className="font-serif text-2xl">
              Anasayfa
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
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
            <Link
              href={user ? "/hesabim" : "/giris"}
              onClick={() => setMobileOpen(false)}
              className="text-[11px] uppercase tracking-wider-2"
            >
              {user ? "Hesabım" : "Giriş Yap"}
            </Link>
          </nav>
        </div>
      )}

      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
