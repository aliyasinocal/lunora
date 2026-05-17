"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MoonIcon from "@/components/ui/MoonIcon";
import { formatPrice } from "@/lib/format";

interface OrderSummary {
  orderNo: string;
  name: string;
  email: string;
  address: string;
  total: number;
  itemCount: number;
  shippingLabel: string;
  giftWrap: boolean;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<OrderSummary | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("lunora_last_order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, []);

  return (
    <Container size="default" className="py-20 md:py-28 text-center">
      <div className="flex justify-center mb-6">
        <span className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center animate-float">
          <MoonIcon size={28} className="text-gold" />
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-wider-3 text-gold">
        Siparişin yola çıkıyor
      </span>
      <h1 className="font-display text-4xl md:text-6xl mt-4">Teşekkürler.</h1>
      <p className="text-ink/70 max-w-md mx-auto mt-5 leading-relaxed">
        Atölyemiz hemen seni özleyen kompozisyonu paketlemeye başlıyor. Ritüel kutun
        elle paketlenip yola çıkacak — sipariş takip bilgilerin e-postana gönderildi.
      </p>

      {order && (
        <div className="mt-10 mx-auto max-w-md bg-sand-soft border border-ink/10 text-left p-7">
          <div className="flex justify-between text-[11px] uppercase tracking-wider-2 text-ink/55">
            <span>Sipariş No</span>
            <span className="text-ink">{order.orderNo}</span>
          </div>
          <div className="gold-line w-full my-4" />
          <Row label="Alıcı" value={order.name} />
          <Row label="E-posta" value={order.email} />
          <Row label="Adres" value={order.address} />
          <Row label="Kargo" value={order.shippingLabel} />
          <Row label="Ürün" value={`${order.itemCount} adet`} />
          {order.giftWrap && <Row label="Hediye paketi" value="Eklendi" />}
          <div className="gold-line w-full my-4" />
          <div className="flex justify-between font-serif text-xl">
            <span>Ödenen</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Button href="/urunler" variant="primary">
          Alışverişe Devam Et
        </Button>
        <Button href="/" variant="outline">
          Anasayfa
        </Button>
      </div>
      <p className="mt-12 font-display text-xl text-ink/55 italic">
        "Dur. Nefes al. Kendine dön."
      </p>
    </Container>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm py-1.5">
      <span className="text-ink/55">{label}</span>
      <span className="text-ink text-right max-w-[60%]">{value}</span>
    </div>
  );
}
