import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Çerez Politikası — Lunora" };

export default function CookiePage() {
  return (
    <LegalPage
      eyebrow="Yasal · Çerez"
      title="Çerez Politikası"
      effectiveDate="01 Ocak 2026"
      sections={[
        {
          title: "Çerez Nedir?",
          body: [
            "Çerezler, ziyaret ettiğiniz web siteleri tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin sizi tanımasını, tercihlerinizi hatırlamasını ve deneyimi iyileştirmesini sağlar.",
          ],
        },
        {
          title: "Kullandığımız Çerez Türleri",
          body: [
            "Zorunlu çerezler: Sepet, oturum ve güvenlik için gerekli, kapatılamaz.",
            "İşlevsel çerezler: Dil, palet, favoriler gibi tercihlerinizi hatırlar.",
            "Analitik çerezler: Anonim trafik verisi toplar (Google Analytics).",
            "Pazarlama çerezleri: İzniniz halinde reklam içeriklerinizi kişiselleştirir (Meta Pixel).",
          ],
        },
        {
          title: "Çerezleri Yönetme",
          body: [
            "Tarayıcı ayarlarınızdan çerezleri silebilir, engelleyebilir veya yalnızca belirli sitelerden gelenleri kabul edebilirsiniz. Zorunlu çerezleri kapatırsanız sitenin bazı özellikleri çalışmayabilir.",
            "Site ilk ziyaretinizde gösterdiğimiz çerez tercih panelinden de seçim yapabilirsiniz.",
          ],
        },
      ]}
    />
  );
}
