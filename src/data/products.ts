import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p-001",
    slug: "essence-of-calm-ritual-seti-navy",
    name: "Essence of Calm Ritüel Seti",
    subtitle: "Lacivert · 4 Parça",
    shortDescription:
      "Tütsü, soya mumu, vücut yağı ve gua sha taşından oluşan imza ritüel seti.",
    description:
      "Gecenin sessizliğine adanmış imza setimiz. Saten kaplı kutusunun içinde sandal ağacı ve nerolinin sıcak hikâyesini taşıyan dört özenle seçilmiş parça bulunur. Her set elle paketlenir; numaralı olumlama kartıyla teslim edilir.",
    price: 4850,
    oldPrice: 5400,
    currency: "TRY",
    images: ["/images/products/essence-set-navy.jpg", "/images/products/essence-set-cream.jpg"],
    category: "ritual-setleri",
    collection: "essence-of-calm",
    theme: "navy",
    badge: "Bestseller",
    inStock: true,
    stockCount: 23,
    isBestseller: true,
    features: [
      "%100 doğal soya mumu (40 saat yanma)",
      "El sarımı bambu tütsü",
      "Soğuk preslenmiş neroli & sandal ağacı yağı",
      "Doğal obsidyen gua sha taşı",
      "Saten astarlı, mıknatıslı koleksiyon kutusu",
    ],
    notes: {
      top: ["Bergamot", "Neroli"],
      heart: ["Beyaz Çay", "Karanfil Çiçeği"],
      base: ["Sandal Ağacı", "Amber", "Misk"],
    },
    weightOrSize: "Set · 4 parça",
    ritual: [
      "Tütsüyü yak, üç derin nefes al.",
      "Vücut yağından bir damla avucuna al, boyun ve omurga boyunca gez.",
      "Gua sha taşıyla yüzünü 3 dakika yumuşakça yukarı doğru tara.",
      "Mumun ışığında, olumlama kartını oku.",
    ],
  },
  {
    id: "p-002",
    slug: "ritual-of-rest-seti-krem",
    name: "Ritual of Rest Seti",
    subtitle: "Krem · 4 Parça",
    shortDescription:
      "Sabah ışığında yumuşak bir uyanış için hazırlanmış krem ritüel kutusu.",
    description:
      "Güne yavaşça başlamak isteyenler için tasarlandı. Vanilya, beyaz amber ve papatya kompozisyonuyla beden ve zihin nazikçe uyanır. Ritüel kartının arkasında imza güne başlama rehberi yer alır.",
    price: 4650,
    currency: "TRY",
    images: ["/images/products/essence-set-cream.jpg", "/images/products/essence-set-navy.jpg"],
    category: "ritual-setleri",
    collection: "rituel-of-rest",
    theme: "cream",
    badge: "Yeni",
    inStock: true,
    stockCount: 17,
    isNew: true,
    isBestseller: true,
    features: [
      "Vanilya & papatya kompozisyonlu mum",
      "Sandal ağacı tütsü",
      "Hafif dokulu vücut yağı (jojoba bazlı)",
      "Krem mermer gua sha taşı",
      "Krem keten dokulu hediye kutusu",
    ],
    notes: {
      top: ["Papatya", "Mandalina"],
      heart: ["Vanilya", "Beyaz Çiçekler"],
      base: ["Beyaz Amber", "Sedir"],
    },
    weightOrSize: "Set · 4 parça",
  },
  {
    id: "p-003",
    slug: "luna-seramik-difuzor-navy",
    name: "Luna Seramik Difüzör",
    subtitle: "Lacivert · Altın Detay",
    shortDescription:
      "Mat lacivert seramik, ince altın hatla bezenmiş aromaterapi difüzörü.",
    description:
      "Söğüt'te elde döküm yöntemiyle üretilen Luna difüzör, sessiz ultrasonik teknolojiyle çalışır. 300 ml su kapasitesiyle 8 saate kadar kesintisiz koku yayar. İnce altın bandı saatlerce süren rötuş işçiliğinin imzasıdır.",
    price: 3200,
    currency: "TRY",
    images: ["/images/products/diffuser-navy.jpg", "/images/products/diffuser-cream.jpg"],
    category: "aroma-ve-difuzor",
    collection: "moonlit-edition",
    theme: "navy",
    inStock: true,
    stockCount: 9,
    isLimited: true,
    isBestseller: true,
    features: [
      "El yapımı mat seramik gövde",
      "300 ml hazne · 8 saat sürekli çalışma",
      "Ultrasonik sessiz teknoloji",
      "Ambiyans ışığı (yumuşak amber)",
      "BPA-içermez iç parçalar",
    ],
    weightOrSize: "Yükseklik 16 cm · Çap 14 cm",
  },
  {
    id: "p-004",
    slug: "luna-seramik-difuzor-krem",
    name: "Luna Seramik Difüzör",
    subtitle: "Krem · Altın Detay",
    shortDescription:
      "Krem tonlarda mat seramik difüzör — gün ışığını aydınlatan altın hat.",
    description:
      "Lacivert kardeşinin krem varyasyonu. Aynı el işçiliği, aynı ses sessizliği, daha aydınlık bir alan. Sabah ritüelleri için ideal.",
    price: 3200,
    currency: "TRY",
    images: ["/images/products/diffuser-cream.jpg", "/images/products/diffuser-navy.jpg"],
    category: "aroma-ve-difuzor",
    collection: "rituel-of-rest",
    theme: "cream",
    inStock: true,
    stockCount: 11,
    features: [
      "El yapımı mat seramik gövde",
      "300 ml hazne · 8 saat sürekli çalışma",
      "Ultrasonik sessiz teknoloji",
      "Ambiyans ışığı (yumuşak amber)",
    ],
    weightOrSize: "Yükseklik 16 cm · Çap 14 cm",
  },
  {
    id: "p-005",
    slug: "marin-ip-dokulu-lamba-navy",
    name: "Marin İp Dokulu Lamba",
    subtitle: "Lacivert · Keten Abajur",
    shortDescription:
      "Elle sarılmış lacivert ip taban ve dokulu keten abajurlu masa lambası.",
    description:
      "Akdeniz limanlarından ilham alan Marin lamba, sabırla elde sarılmış ip tabanı ve lacivert dokulu keten abajurunun buluşmasıdır. Yumuşak amber tonlu ışığı, ev içinde sahil akşamlarının melankolik sıcaklığını yaratır.",
    price: 5400,
    currency: "TRY",
    images: ["/images/products/rope-lamp-navy.jpg", "/images/products/rope-lamp-cream.jpg"],
    category: "aydinlatma",
    collection: "essence-of-calm",
    theme: "navy",
    inStock: true,
    stockCount: 7,
    isBestseller: true,
    features: [
      "Elle sarılmış doğal ip taban",
      "Dokulu lacivert keten abajur",
      "E27 duy · 25W LED dahil",
      "Toz pamuklu kablo (1.8m)",
      "Topraklı fiş",
    ],
    weightOrSize: "Yükseklik 42 cm",
  },
  {
    id: "p-006",
    slug: "marin-ip-dokulu-lamba-krem",
    name: "Marin İp Dokulu Lamba",
    subtitle: "Krem · Natürel Keten",
    shortDescription:
      "Doğal keten ve krem ip tabanlı, ışığın yumuşak yansıdığı masa lambası.",
    description:
      "Krem ipi sabırla dokunan taban, natürel keten abajurun yumuşaklığıyla buluşur. Yatak odası, okuma köşesi ve giriş holü için tasarlanan zaman ötesi parça.",
    price: 5400,
    currency: "TRY",
    images: ["/images/products/rope-lamp-cream.jpg", "/images/products/rope-lamp-navy.jpg"],
    category: "aydinlatma",
    collection: "rituel-of-rest",
    theme: "cream",
    inStock: true,
    stockCount: 5,
    features: [
      "Elle sarılmış doğal ip taban",
      "Krem dokulu keten abajur",
      "E27 duy · 25W LED dahil",
      "Toz pamuklu kablo (1.8m)",
    ],
    weightOrSize: "Yükseklik 42 cm",
  },
  {
    id: "p-007",
    slug: "olumlama-kartlari-navy",
    name: "Olumlama Kartları",
    subtitle: "Lacivert Edisyon · 52 Kart",
    shortDescription:
      "Her gün kendine dönmek için 52 hatırlatma. Altın yaldız baskılı kartlar.",
    description:
      "Sözcüklerin gücüne inananlar için tasarlandı. Aslı Bakırhan ile birlikte yazılmış 52 olumlama, gecenin sakinliğini taşıyan lacivert üstüne altın yaldız ile basıldı. Saten kaplı koleksiyon kutusunda.",
    price: 1450,
    currency: "TRY",
    images: ["/images/products/affirmation-cards-navy.jpg", "/images/products/affirmation-cards-cream.jpg"],
    category: "olumlama-ve-mindfulness",
    collection: "essence-of-calm",
    theme: "navy",
    inStock: true,
    stockCount: 41,
    isBestseller: true,
    features: [
      "52 kart · özel kuşe kağıt",
      "Altın yaldız baskı",
      "Saten astarlı mıknatıslı kutu",
      "Ritüel rehberi dahil",
      "Hediyeye hazır ambalaj",
    ],
    weightOrSize: "12 × 8 cm · 52 kart",
  },
  {
    id: "p-008",
    slug: "olumlama-kartlari-krem",
    name: "Olumlama Kartları",
    subtitle: "Krem Edisyon · 52 Kart",
    shortDescription:
      "Sabah ritüelleri için tasarlanmış krem tonlu, 52 kartlık olumlama destesi.",
    description:
      "Aynı yazınsal derinlik, daha aydınlık bir aura. Krem ton üzerine bakır yaldız baskıyla hazırlanan kartlar, sabah ışığında bir fincan çay eşliğinde okunmak için ideal.",
    price: 1450,
    currency: "TRY",
    images: ["/images/products/affirmation-cards-cream.jpg", "/images/products/affirmation-cards-navy.jpg"],
    category: "olumlama-ve-mindfulness",
    collection: "rituel-of-rest",
    theme: "cream",
    inStock: true,
    stockCount: 36,
    features: [
      "52 kart · özel kuşe kağıt",
      "Bakır yaldız baskı",
      "Krem keten dokulu kutu",
      "Ritüel rehberi dahil",
    ],
    weightOrSize: "12 × 8 cm · 52 kart",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection === collection);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const sameCollection = products.filter(
    (p) =>
      p.id !== product.id &&
      p.collection === product.collection &&
      !sameCategory.find((s) => s.id === p.id)
  );
  const others = products.filter(
    (p) =>
      p.id !== product.id &&
      !sameCategory.find((s) => s.id === p.id) &&
      !sameCollection.find((s) => s.id === p.id)
  );
  return [...sameCategory, ...sameCollection, ...others].slice(0, limit);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, 8);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew).slice(0, 8);
}
