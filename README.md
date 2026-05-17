# Lunora — Sakinliğin Özü

Premium ev ritüel objeleri markası **Lunora** için kurumsal e-ticaret demo sitesi.

> *Dur. Nefes al. Kendine dön.*

## Hakkında

Lunora, evinin içinde sana ait sakin bir alan yaratmak için tasarlanmış el yapımı ritüel objeleri sunan, üst gelir grubuna hitap eden bir premium markadır. Bu repo, müşteriye sunum için hazırlanmış **frontend-only** demo siteyi içerir. Gerçek ödeme altyapısı barındırmaz, mock akış kullanır.

## Teknik

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Diller:** TypeScript, Türkçe içerik
- **Stil:** Tailwind CSS v4 (özel tema: lacivert + krem + altın)
- **Animasyon:** Framer Motion
- **Tipografi:** Fraunces (serif) + Plus Jakarta Sans (sans)
- **State:** React Context (sepet, favoriler, mock auth)
- **Persistence:** localStorage

## Sayfa Yapısı

| Yol | Açıklama |
| --- | --- |
| `/` | Anasayfa — hero, koleksiyonlar, manifesto, kategoriler, bestseller, jurnal |
| `/koleksiyonlar` | Tüm koleksiyonlar |
| `/koleksiyonlar/[slug]` | Koleksiyon detay (Essence of Calm, Ritual of Rest, Moonlit Edition) |
| `/urunler` | Tüm ürünler + filtre, arama, sıralama |
| `/kategori/[slug]` | Kategori bazlı liste |
| `/urun/[slug]` | Ürün detay (galeri, koku notaları, ritüel rehberi, akordeon bilgi) |
| `/sepet` | Sepet sayfası |
| `/odeme` | 3 adımlı mock checkout (teslimat → kargo → ödeme) |
| `/odeme/basarili` | Sipariş başarı ekranı |
| `/favoriler` | Favori ürünler |
| `/giris`, `/uyelik`, `/hesabim` | Mock üyelik akışı |
| `/hikayemiz` | Marka hikâyesi, misyon, vizyon, değerler |
| `/jurnal`, `/jurnal/[slug]` | Blog liste + detay (6 yazı) |
| `/magazalar` | 5 fiziksel mağaza listesi |
| `/iletisim` | İletişim formu, sosyal medya |
| `/kurumsal-hediye` | B2B talep formu |
| `/sss` | Sıkça sorulan sorular |
| `/kvkk`, `/gizlilik`, `/kullanim-kosullari`, `/cerez-politikasi`, `/iade-ve-teslimat` | Yasal sayfalar |

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
```

## Üretim Build

```bash
npm run build
npm start
```

## Deploy

Repoyu GitHub'a pushladıktan sonra Vercel ile bağlanması yeterli; ek yapılandırma gerekmez.

## Ürün Verisi

32 ürün `src/data/products.ts` içinde tanımlı. Görseller `public/images/products/` altında.

## Marka Renkleri

- **Ink** `#0b1428` (lacivert / akşam paleti)
- **Sand** `#f6efe2` (krem / sabah paleti)
- **Gold** `#c8a668` (altın aksanı)

## Tagline

> Dur. Nefes al. Kendine dön.

---

Türkiye'de el yapımı.
