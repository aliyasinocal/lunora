"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, MapPin, User, LogOut } from "lucide-react";
import Container from "@/components/ui/Container";
import MoonIcon from "@/components/ui/MoonIcon";
import Button from "@/components/ui/Button";
import { useAuth } from "@/lib/auth-context";
import { useFavorites } from "@/lib/favorites-context";
import { useCart } from "@/lib/cart-context";

export default function AccountPage() {
  const router = useRouter();
  const { user, signOut, isAuthenticated } = useAuth();
  const { favorites } = useFavorites();
  const { itemCount } = useCart();

  useEffect(() => {
    if (isAuthenticated === false && user === null) {
      const t = setTimeout(() => {
        if (!user) router.push("/giris");
      }, 200);
      return () => clearTimeout(t);
    }
  }, [isAuthenticated, user, router]);

  if (!user) {
    return (
      <Container size="default" className="py-32 text-center">
        <p className="text-ink/60">Yönlendiriliyorsun…</p>
      </Container>
    );
  }

  return (
    <Container size="wide" className="py-16 md:py-20">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="bg-sand-soft p-7 border border-ink/10">
            <MoonIcon size={20} className="text-gold mb-3" />
            <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">Hoş geldin</span>
            <h1 className="font-display text-2xl mt-1">{user.name}</h1>
            <p className="text-xs text-ink/55 mt-1">{user.email}</p>
            <div className="gold-line w-full my-4" />
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/hesabim" className="flex items-center gap-2 hover:text-gold transition">
                <User size={14} /> Profilim
              </Link>
              <Link href="/favoriler" className="flex items-center gap-2 hover:text-gold transition">
                <Heart size={14} /> Favorilerim ({favorites.length})
              </Link>
              <Link href="/sepet" className="flex items-center gap-2 hover:text-gold transition">
                <ShoppingBag size={14} /> Sepetim ({itemCount})
              </Link>
              <Link href="#adresler" className="flex items-center gap-2 hover:text-gold transition">
                <MapPin size={14} /> Adreslerim
              </Link>
              <button
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
                className="flex items-center gap-2 hover:text-gold transition text-left"
              >
                <LogOut size={14} /> Çıkış Yap
              </button>
            </nav>
          </div>
        </aside>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-3xl mb-6">Hesap Özeti</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <Stat label="Toplam Sipariş" value="3" hint="Son 12 ay" />
              <Stat label="Ritüel Puanı" value="240" hint="Lunora kart" />
              <Stat label="Üyelik" value="Lunar" hint="Gold seviyesi" />
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl mb-6">Son Siparişlerin</h2>
            <div className="border border-ink/10 divide-y divide-ink/10">
              <Order
                no="LNR-204812"
                date="14 Nisan 2026"
                status="Teslim Edildi"
                total="4.650 TL"
                items="Essence of Calm Ritüel Seti + 1 ürün"
              />
              <Order
                no="LNR-198104"
                date="22 Mart 2026"
                status="Yola Çıktı"
                total="2.230 TL"
                items="Luna Difüzör (krem) + Morning Light yağ"
              />
              <Order
                no="LNR-176293"
                date="3 Şubat 2026"
                status="Teslim Edildi"
                total="1.450 TL"
                items="Olumlama Kartları (lacivert edisyon)"
              />
            </div>
          </section>

          <section id="adresler">
            <div className="flex items-end justify-between mb-6">
              <h2 className="font-display text-3xl">Adreslerim</h2>
              <button className="text-[11px] uppercase tracking-wider-2 hover:text-gold transition">
                + Yeni Adres Ekle
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <AddressCard
                label="Ev"
                name={user.name}
                address="Cevdet Paşa Cad. No: 24, Bebek, Beşiktaş / İstanbul"
                phone="+90 532 000 00 00"
              />
              <AddressCard
                label="Ofis"
                name={user.name}
                address="Büyükdere Cad. No: 191, Levent, Şişli / İstanbul"
                phone="+90 532 000 00 00"
              />
            </div>
          </section>

          <div className="text-center text-[11px] text-ink/45">
            Bu bir demo hesabıdır. Veriler yalnızca cihazında saklanır, dış sunucuya gönderilmez.
          </div>
          <div className="text-center">
            <Button href="/" variant="outline">
              Anasayfa
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="bg-sand-soft border border-ink/10 p-6">
      <div className="text-[10px] uppercase tracking-wider-2 text-ink/55">{label}</div>
      <div className="font-display text-3xl mt-2 text-ink">{value}</div>
      <div className="text-[11px] text-ink/55 mt-1">{hint}</div>
    </div>
  );
}

function Order({
  no,
  date,
  status,
  total,
  items,
}: {
  no: string;
  date: string;
  status: string;
  total: string;
  items: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 items-center p-5">
      <div>
        <div className="text-[11px] uppercase tracking-wider-2 text-ink/55">{no}</div>
        <div className="font-serif text-base mt-1">{items}</div>
      </div>
      <div className="text-sm">
        <div>{date}</div>
        <div className="text-[11px] uppercase tracking-wider-2 text-gold mt-1">{status}</div>
      </div>
      <div className="font-medium md:text-right">{total}</div>
    </div>
  );
}

function AddressCard({
  label,
  name,
  address,
  phone,
}: {
  label: string;
  name: string;
  address: string;
  phone: string;
}) {
  return (
    <div className="bg-sand-soft border border-ink/10 p-6">
      <div className="text-[10px] uppercase tracking-wider-2 text-gold mb-2">{label}</div>
      <div className="font-serif text-base">{name}</div>
      <p className="text-sm text-ink/65 mt-2 leading-relaxed">{address}</p>
      <p className="text-sm text-ink/65 mt-1">{phone}</p>
      <div className="flex gap-3 mt-4 text-[11px] uppercase tracking-wider-2">
        <button className="hover:text-gold transition">Düzenle</button>
        <button className="hover:text-gold transition">Sil</button>
      </div>
    </div>
  );
}
