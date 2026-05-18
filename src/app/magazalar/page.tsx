import { Phone, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { stores } from "@/data/stores";

export const metadata = {
  title: "Mağazalar — Lunora",
  description: "Lunora flagship mağazaları ve showroom'larımız. İstanbul, İzmir, Ankara, Bodrum.",
};

export default function StoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Showroom'larımız"
        title="Bizi ziyaret et"
        subtitle="İstanbul'dan Bodrum'a kadar Türkiye'nin dört bir yanında Lunora'yı yerinde deneyimleyebileceğin küçük mağazalarımız."
      />
      <Container size="wide" className="py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {stores.map((store) => (
            <div key={store.id} className="bg-sand p-7 md:p-10 hover:bg-sand-soft transition">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-[10px] uppercase tracking-wider-3 text-gold">
                    {store.city}
                  </span>
                  <h2 className="font-serif text-2xl mt-1">{store.name}</h2>
                </div>
              </div>
              <div className="space-y-3 text-sm text-ink/75">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <a href={`tel:${store.phone}`} className="hover:text-ink transition">
                    {store.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{store.hours}</span>
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                target="_blank"
                rel="noopener"
                className="inline-block mt-6 text-[11px] uppercase tracking-wider-2 border-b border-ink/30 hover:border-ink pb-0.5 transition"
              >
                Yol Tarifi Al →
              </a>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-ink text-sand py-20 text-center">
        <Container size="default">
          <h2 className="font-display text-3xl md:text-4xl">Atölye ziyareti ister misin?</h2>
          <p className="text-sand/65 mt-4 max-w-md mx-auto">
            Söğüt'teki atölyemizi ayda iki kez küçük gruplara açıyoruz. Mum dökümü, tütsü
            sarımı ve ritüel workshop'u içerikli yarım günlük program.
          </p>
          <a
            href="mailto:atolye@lunora.com.tr"
            className="inline-block mt-8 px-8 py-3.5 border border-gold text-gold text-[11px] uppercase tracking-wider-2 hover:bg-gold hover:text-ink transition"
          >
            Atölyeye Yaz
          </a>
        </Container>
      </section>
    </>
  );
}
