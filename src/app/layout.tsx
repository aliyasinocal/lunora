import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Announcement from "@/components/layout/Announcement";
import { CartProvider } from "@/lib/cart-context";
import { FavoritesProvider } from "@/lib/favorites-context";
import { AuthProvider } from "@/lib/auth-context";
import { ToastProvider } from "@/lib/toast-context";
import { RecentlyViewedProvider } from "@/lib/recently-viewed-context";
import CookieBanner from "@/components/layout/CookieBanner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lunora — Sakinliğin Özü",
  description:
    "Lunora, evinin içinde sana ait sakin bir alan yaratmak için tasarlanmış ritüel objeleri sunar. Mum, tütsü, vücut yağı, difüzör ve daha fazlası — el yapımı, doğal, sürdürülebilir.",
  keywords: [
    "lunora",
    "mum",
    "tütsü",
    "difüzör",
    "vücut yağı",
    "ritüel",
    "wellness",
    "premium ev",
    "olumlama kartları",
  ],
  openGraph: {
    title: "Lunora — Sakinliğin Özü",
    description: "Dur. Nefes Al. Kendine Dön.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-sand text-ink">
        <AuthProvider>
          <ToastProvider>
            <FavoritesProvider>
              <CartProvider>
                <RecentlyViewedProvider>
                  <Announcement />
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                  <CookieBanner />
                </RecentlyViewedProvider>
              </CartProvider>
            </FavoritesProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
