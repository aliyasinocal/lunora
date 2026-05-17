import Container from "@/components/ui/Container";
import MoonIcon from "@/components/ui/MoonIcon";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container size="default" className="py-32 text-center">
      <MoonIcon size={36} className="text-gold mx-auto mb-6 animate-float" />
      <span className="font-display text-7xl md:text-9xl text-ink/15 leading-none">404</span>
      <h1 className="font-display text-4xl md:text-5xl mt-4">Bulamadık.</h1>
      <p className="text-ink/65 mt-4 max-w-md mx-auto">
        Aradığın sayfa kaybolmuş gibi görünüyor. Belki seni anasayfaya yönlendirsek seninle
        birlikte yeni bir yol açabiliriz.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Button href="/" variant="primary">
          Anasayfaya Dön
        </Button>
        <Button href="/urunler" variant="outline">
          Ürünleri Keşfet
        </Button>
      </div>
    </Container>
  );
}
