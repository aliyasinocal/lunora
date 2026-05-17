"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { cn } from "@/lib/format";

const groups = [
  {
    title: "Sipariş & Kargo",
    qa: [
      {
        q: "Siparişim ne kadar sürede gelir?",
        a: "Türkiye geneli standart kargoda 2-3 iş günü içinde teslim ediyoruz. İstanbul içi aynı gün kargo seçeneğimiz de var. 3.500 TL üzeri siparişlerde kargo ücretsizdir.",
      },
      {
        q: "Kargomu nasıl takip edebilirim?",
        a: "Siparişin atölyemizden çıktığında e-posta ile kargo takip numarası gönderilir. Hesabım > Siparişlerim sayfasından da takip edebilirsin.",
      },
      {
        q: "Yurtdışına gönderim yapıyor musunuz?",
        a: "Şu an için yalnızca Türkiye'ye gönderim yapıyoruz. KKTC, Almanya ve Hollanda'ya yönelik bir pilot çalışmamız Eylül 2026'da başlayacak.",
      },
    ],
  },
  {
    title: "Ürün & İçerik",
    qa: [
      {
        q: "Ürünleriniz vegan ve cruelty-free mi?",
        a: "Tüm cilt/vücut bakım ürünlerimiz %100 vegan ve cruelty-free'dir. Mum ve tütsülerimiz de hayvansal içerik barındırmaz.",
      },
      {
        q: "Mum yanma süreleri nedir?",
        a: "220g standart mumlarımız yaklaşık 50 saat, 50g mini mumlarımız 12 saat yanar. Fitili her yakışta 0.5 cm kadar kesmen yanma süresini uzatır.",
      },
      {
        q: "Esansiyel yağlarınız nereden geliyor?",
        a: "Çoğu esansiyel yağımızı Isparta'dan (gül, lavanta), Hindistan'dan (sandal ağacı) ve İtalya'dan (bergamot, neroli) ithal ediyoruz. Tedarikçilerimizi sayfamızda paylaşıyoruz.",
      },
      {
        q: "Hassas cildim için uygun mu?",
        a: "Vanilya & Papatya formülümüz özellikle hassas ciltler için tasarlandı. Yine de patch test yapmanı öneririz. Allerjik bir reaksiyon yaşarsan ürünü iade edebilirsin.",
      },
    ],
  },
  {
    title: "İade & Değişim",
    qa: [
      {
        q: "İade politikanız nedir?",
        a: "Açılmamış ürünler 14 gün içinde iade edilebilir. Hijyen gereği açılmış bakım ürünleri ve kişiselleştirilmiş hediyeler iade kapsamında değildir.",
      },
      {
        q: "Hatalı ürün geldiğinde ne yapmalıyım?",
        a: "Hatalı ya da hasarlı ürünleri 7 gün içinde bildirip iade etmen yeterli. Yeni ürün ya da iadeyi senin tercihine göre yapıyoruz.",
      },
      {
        q: "İade bedeli ne zaman hesabıma yansır?",
        a: "İade ürünü atölyemize ulaştıktan sonra 5 iş günü içinde ödemen yapılır. Kredi kartı iadelerinde bankaya bağlı olarak yansıması 1-3 iş günü daha sürebilir.",
      },
    ],
  },
  {
    title: "Hediye & Kurumsal",
    qa: [
      {
        q: "Hediye paketlemesi yapıyor musunuz?",
        a: "Ödeme adımında hediye paketlemesi ve kart notu seçeneğini ekleyebilirsin. Saten kurdele, mıknatıslı kutu ve elle yazılmış notla beraber gönderilir (+80 TL).",
      },
      {
        q: "Kurumsal hediye paketleri hazırlatabilir miyim?",
        a: "Evet. 25 adet üzeri özel set hazırlıyoruz. Logo basımı, özelleştirilmiş kart ve farklı ürün kombinasyonları mümkün. İletişim formundan 'Kurumsal Hediye' başlığıyla bize yazabilirsin.",
      },
    ],
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<string>("Sipariş & Kargo|0");

  return (
    <>
      <PageHero
        eyebrow="Yardım merkezi"
        title="Sıkça sorulan sorular"
        subtitle="Aradığını bulamazsan iletişim formundan bize yaz, en geç iki iş günü içinde dönüyoruz."
      />
      <Container size="narrow" className="py-16 md:py-20 space-y-12">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-2xl md:text-3xl mb-5">{group.title}</h2>
            <div className="border-t border-ink/15">
              {group.qa.map((item, i) => {
                const key = `${group.title}|${i}`;
                const isOpen = open === key;
                return (
                  <div key={i} className="border-b border-ink/15">
                    <button
                      onClick={() => setOpen(isOpen ? "" : key)}
                      className="w-full text-left flex items-center justify-between py-5 hover:text-gold transition"
                    >
                      <span className="font-serif text-base md:text-lg pr-4">{item.q}</span>
                      <span className="text-xl font-light">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-500",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-5"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
