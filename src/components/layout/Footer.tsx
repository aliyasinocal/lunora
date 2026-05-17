import Link from "next/link";
import Logo from "../ui/Logo";
import MoonIcon from "../ui/MoonIcon";
import { InstagramIcon, YoutubeIcon, FacebookIcon, PinterestIcon } from "../ui/SocialIcons";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand mt-24">
      <div className="border-b border-sand/10">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-md">
            <MoonIcon size={22} className="text-gold mb-3" />
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Sakinliğin ilk haberini al.
            </h3>
            <p className="text-sand/60 mt-3 text-sm leading-relaxed">
              Yeni koleksiyonlardan, sınırlı sayıda üretilen parçalardan ve atölyemizden
              özel notları sana ilk biz iletelim.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Logo variant="footer" />
          <p className="text-sand/60 text-xs leading-relaxed mt-6 max-w-xs">
            Lunora; evinin içinde sana ait sakin bir alan yaratmak için tasarlanmış el yapımı
            ritüel objeleri sunar. Söğüt'teki atölyemizde küçük partilerle, sevgiyle üretiliyor.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h4 className="text-[10px] uppercase tracking-wider-3 text-sand/40 mb-2">Keşfet</h4>
          <Link href="/koleksiyonlar" className="hover:text-gold transition">Koleksiyonlar</Link>
          <Link href="/urunler" className="hover:text-gold transition">Tüm Ürünler</Link>
          <Link href="/kategori/ritual-setleri" className="hover:text-gold transition">Ritüel Setleri</Link>
          <Link href="/kategori/aroma-ve-difuzor" className="hover:text-gold transition">Aroma & Difüzör</Link>
          <Link href="/kategori/aydinlatma" className="hover:text-gold transition">Aydınlatma</Link>
          <Link href="/jurnal" className="hover:text-gold transition">Jurnal</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h4 className="text-[10px] uppercase tracking-wider-3 text-sand/40 mb-2">Hizmetler</h4>
          <Link href="/iletisim" className="hover:text-gold transition">İletişim</Link>
          <Link href="/magazalar" className="hover:text-gold transition">Mağazalar</Link>
          <Link href="/sss" className="hover:text-gold transition">SSS</Link>
          <Link href="/iade-ve-teslimat" className="hover:text-gold transition">İade & Teslimat</Link>
          <Link href="/kurumsal-hediye" className="hover:text-gold transition">Kurumsal Hediye</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h4 className="text-[10px] uppercase tracking-wider-3 text-sand/40 mb-2">Yasal</h4>
          <Link href="/gizlilik" className="hover:text-gold transition">Gizlilik Politikası</Link>
          <Link href="/kvkk" className="hover:text-gold transition">KVKK Aydınlatma</Link>
          <Link href="/kullanim-kosullari" className="hover:text-gold transition">Kullanım Koşulları</Link>
          <Link href="/cerez-politikasi" className="hover:text-gold transition">Çerez Politikası</Link>
          <div className="flex items-center gap-4 mt-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="text-sand/60 hover:text-gold transition">
              <InstagramIcon size={18} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="text-sand/60 hover:text-gold transition">
              <YoutubeIcon size={18} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="text-sand/60 hover:text-gold transition">
              <FacebookIcon size={18} />
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener" aria-label="Pinterest" className="text-sand/60 hover:text-gold transition">
              <PinterestIcon size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-wider-2 text-sand/50">
          <span>© {new Date().getFullYear()} Lunora · Sakinliğin Özü</span>
          <span>Dur. Nefes Al. Kendine Dön.</span>
          <span>Türkiye'de el yapımı</span>
        </div>
      </div>
    </footer>
  );
}
