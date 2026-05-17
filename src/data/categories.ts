import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "ritual-setleri",
    name: "Ritüel Setleri",
    description:
      "Günün her anına eşlik etmek için özenle bir araya getirilmiş hediye setleri.",
    intro:
      "Bir ritüelin başlaması için tek bir nefes yeter. Lunora ritüel setleri, evindeki sade bir köşeyi sana ait bir tören alanına dönüştürmek için tasarlandı.",
    hero: "/images/products/essence-set-navy.jpg",
  },
  {
    slug: "aroma-ve-difuzor",
    name: "Aroma & Difüzör",
    description:
      "Seramik difüzörler, esansiyel yağlar ve atmosferi dönüştüren aksesuarlar.",
    intro:
      "Bir kokunun zihni nasıl yeniden inşa edebileceğini hatırlatan tasarımlar. Tüm seramikler Söğüt'te elde üretiliyor.",
    hero: "/images/products/diffuser-navy.jpg",
  },
  {
    slug: "aydinlatma",
    name: "Aydınlatma",
    description: "Sıcak ışık veren, doğal dokulu masa ve dekoratif lambalar.",
    intro:
      "Akşam ışığı bir mekânın ruhudur. İp dokulu seramik tabanlar ve doğal keten abajurlarla evine yumuşak bir aura katar.",
    hero: "/images/products/rope-lamp-navy.jpg",
  },
  {
    slug: "olumlama-ve-mindfulness",
    name: "Olumlama & Mindfulness",
    description:
      "Olumlama kartları, dergi setleri ve gündelik ritüel rehberleri.",
    intro:
      "Sözcükler ritüelin ta kendisidir. Her kart, kendine dönmek için bir ara nefes vermek üzere tasarlandı.",
    hero: "/images/products/affirmation-cards-cream.jpg",
  },
];

export const collections = [
  {
    slug: "essence-of-calm",
    name: "Essence of Calm",
    subtitle: "Sakinliğin Özü",
    description:
      "Markamızın ilk ve ana koleksiyonu: lacivert ve altın, sandal ağacı ve neroli. Geceyi yumuşatmak için bir araya getirildi.",
    image: "/images/products/essence-set-navy.jpg",
    theme: "navy" as const,
  },
  {
    slug: "rituel-of-rest",
    name: "Ritual of Rest",
    subtitle: "Dinlenme Ritüeli",
    description:
      "Krem tonlar ve altın detaylarla sabahın ilk ışıklarına özel ritüel objeleri. Bedenle yumuşak bir buluşma.",
    image: "/images/products/essence-set-cream.jpg",
    theme: "cream" as const,
  },
  {
    slug: "moonlit-edition",
    name: "Moonlit Edition",
    subtitle: "Ay Işığı Serisi",
    description:
      "Sınırlı sayıda üretilen, hilal motifli, mat seramik dokulu özel parçalar. Numaralı koleksiyon.",
    image: "/images/products/diffuser-navy.jpg",
    theme: "navy" as const,
  },
];
