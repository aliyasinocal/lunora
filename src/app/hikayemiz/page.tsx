import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import MoonIcon from "@/components/ui/MoonIcon";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Hikâyemiz — Lunora",
  description:
    "Lunora'nın kuruluş hikâyesi: misyon, vizyon ve değerlerimiz. Söğüt'teki atölyemizden başlayan yolculuk.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="2024'ten bu yana"
        title="Lunora, bir nefesin imzasıdır."
        subtitle="Söğüt'teki küçük atölyemizden çıkan ritüel objeleri, evinin içinde sana ait sakin bir alan yaratmak için tasarlandı."
      />

      <section className="bg-sand py-20">
        <Container size="wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/products/diffuser-cream.jpg"
                alt="Lunora atölyesi"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <MoonIcon size={22} className="text-gold mb-4" />
              <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
                Başlangıç
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mt-3">
                Bir mum yakmakla başladı.
              </h2>
              <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
                <p>
                  2024 yılının kasım ayında, Bilkent'te biten bir mesai sonrası, dört arkadaş
                  bir kahve sohbetinde, "Eve dönmek artık dinlendirmiyor" dedi. Tasarımcı bir
                  çift, bir kokuculuk eğitimi almış kimya mezunu ve bir editör.
                </p>
                <p>
                  Söğüt'teki bir akrabadan kalan küçük atölye, ilk denemelerin sahnesi oldu.
                  Yerel kil, jojoba bazlı yağlar, soya mumu, el yapımı bambu çubuklar... İlk
                  Essence of Calm seti, üç ay sonra kapıdan çıktı.
                </p>
                <p>
                  Bugün hâlâ aynı atölyede çalışıyoruz. Hâlâ küçük partilerle üretiyoruz. Hâlâ
                  her mumun fitilini elle düğümlüyoruz. Çünkü kaybetmek istemediğimiz şey, bu
                  yavaşlığın kendisi.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-sand py-20 md:py-28">
        <Container size="default">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-wider-3 text-gold">Misyon</span>
              <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight">
                Sakinliği bir nesneye dönüştürmek.
              </h2>
              <p className="mt-5 text-sand/70 leading-relaxed">
                Hayatın hızına karşı koymak zor. Ama küçük, somut bir nesne — bir mum, bir
                kart, bir taş — zihne "şimdi yavaşla" demek için yeterli olabilir. Bizim
                yaptığımız iş, bu küçük "duruşları" tasarlamak. Her parça, kendine bir tören
                sunmak için bir bahane.
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider-3 text-gold">Vizyon</span>
              <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight">
                Türkiye'nin ilk lifestyle ritüel markası olmak.
              </h2>
              <p className="mt-5 text-sand/70 leading-relaxed">
                Premium aromaterapinin İskandinav minimalizmiyle, Anadolu el sanatlarıyla ve
                modern mindfulness pratikleriyle buluştuğu özgün bir dil yaratmak. Önce
                Türkiye'de, sonra dünyada — "Lunora" denildiğinde akla bir ânın gelmesi.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <Container size="wide">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
              Değerlerimiz
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Beş yön, tek bir pusula.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-ink/10">
            {[
              {
                t: "Yavaşlık",
                d: "Bir ürünü hızlı yapmak yerine doğru yapmayı seçiyoruz. Üç günlük pişirim de bunun parçası.",
              },
              {
                t: "Doğa",
                d: "Sentetik kokulara değil, soğuk preslenmiş ham maddelere ve esansiyel yağlara güveniyoruz.",
              },
              {
                t: "El emeği",
                d: "Atölyedeki her insanın imzası, ürünün üzerinde fark edilebilir bir izdir.",
              },
              {
                t: "Şeffaflık",
                d: "İçerikleri, üretim sürecini, fiyatlandırmayı her zaman açık paylaşırız.",
              },
              {
                t: "Topluluk",
                d: "Müşteri kelimesi yerine 'topluluk' diyoruz. Ritüel paylaşıldığında daha güçlü.",
              },
            ].map((v) => (
              <div key={v.t} className="bg-sand p-7 hover:bg-sand-soft transition">
                <div className="text-xl text-gold mb-3">✦</div>
                <h3 className="font-serif text-xl mb-3">{v.t}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand-soft py-20 md:py-28">
        <Container size="default">
          <div className="text-center">
            <MoonIcon size={20} className="text-gold mx-auto mb-4" />
            <span className="text-[10px] uppercase tracking-wider-3 text-ink/55">
              Bizimle çalışmak ister misin?
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl mx-auto leading-tight">
              Atölyemize bir gün konuk ol.
            </h2>
            <p className="mt-5 text-ink/65 max-w-md mx-auto">
              Söğüt'teki atölyemizde, ayda iki kez küçük gruplarla mum dökümü ve ritüel
              workshop'ları düzenliyoruz.
            </p>
            <Button href="/iletisim" variant="primary" size="lg" className="mt-8">
              İletişim Formu
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
