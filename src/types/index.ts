export type ColorTheme = "navy" | "cream";

export interface Category {
  slug: string;
  name: string;
  description: string;
  hero?: string;
  intro?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  shortDescription: string;
  description: string;
  price: number;
  oldPrice?: number;
  currency: "TRY";
  images: string[];
  category: string;
  collection?: string;
  theme: ColorTheme;
  badge?: string;
  inStock: boolean;
  stockCount: number;
  features: string[];
  notes?: { top?: string[]; heart?: string[]; base?: string[] };
  ingredients?: string[];
  weightOrSize?: string;
  ritual?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  isLimited?: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  theme: ColorTheme;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
}

export interface Store {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image?: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
