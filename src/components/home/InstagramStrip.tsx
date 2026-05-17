import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "../ui/SocialIcons";
import Container from "../ui/Container";

const photos = [
  "/images/products/essence-set-navy.jpg",
  "/images/products/diffuser-cream.jpg",
  "/images/products/rope-lamp-navy.jpg",
  "/images/products/affirmation-cards-cream.jpg",
  "/images/products/essence-set-cream.jpg",
  "/images/products/diffuser-navy.jpg",
];

export default function InstagramStrip() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <Container size="wide">
        <div className="text-center mb-10">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-2 hover:text-gold transition"
          >
            <InstagramIcon size={16} />
            @lunora.rituelleri
          </Link>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Topluluğumuzdan</h2>
        </div>
      </Container>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-sand/50">
        {photos.map((src, i) => (
          <Link
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            className="relative aspect-square overflow-hidden group bg-ink"
          >
            <Image
              src={src}
              alt="Lunora topluluğu"
              fill
              sizes="(min-width: 768px) 16vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition flex items-center justify-center">
              <InstagramIcon size={22} className="text-sand opacity-0 group-hover:opacity-100 transition" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
