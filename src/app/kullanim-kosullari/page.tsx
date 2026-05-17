import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Kullanım Koşulları — Lunora" };

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Yasal · Koşullar"
      title="Kullanım Koşulları"
      effectiveDate="01 Ocak 2026"
      sections={[
        {
          title: "Genel",
          body: [
            "lunora.com.tr (\"Site\") Lunora Ev Ritüelleri A.Ş. tarafından işletilir. Siteyi kullanarak işbu kullanım koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız siteyi kullanmamanızı rica ederiz.",
          ],
        },
        {
          title: "Üyelik",
          body: [
            "Site üzerinden alışveriş yapmak için üyelik şart değildir, ancak üye olanlar geçmiş siparişlerine erişebilir ve daha hızlı sipariş tamamlayabilir.",
            "Üyelik bilgilerinin doğru ve güncel olmasından kullanıcı sorumludur. Şifrenizin gizliliğini korumak da kullanıcının yükümlülüğüdür.",
          ],
        },
        {
          title: "Ürün ve Fiyat Bilgileri",
          body: [
            "Sitede yer alan ürün görselleri ve içerikler bilgilendirme amaçlıdır. Stok durumu ve fiyat bilgileri zaman zaman değişiklik gösterebilir. Lunora, fiyat ve ürün bilgilerini önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.",
            "Renk farklılıkları ekran kalibrasyonuna bağlı olarak yaşanabilir; el yapımı ürünlerimizde küçük doğal farklılıklar normaldir.",
          ],
        },
        {
          title: "Sipariş ve Ödeme",
          body: [
            "Tüm siparişler stok durumuna bağlıdır. Lunora, sipariş onayından önce siparişi reddetme hakkını saklı tutar. Ödemeler kredi/banka kartı veya havale ile alınır; ödeme alındıktan sonra siparişiniz hazırlanmaya başlar.",
          ],
        },
        {
          title: "Fikri Mülkiyet",
          body: [
            "Site içeriği, görseller, marka adı, logo, fotoğraflar ve metinler Lunora'nın fikri mülkiyetidir ve izinsiz kopyalanamaz, dağıtılamaz.",
          ],
        },
        {
          title: "Uyuşmazlık ve Yetkili Mahkeme",
          body: [
            "İşbu koşulların yorumunda Türkiye Cumhuriyeti yasaları uygulanır. Uyuşmazlık durumunda İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri yetkilidir.",
          ],
        },
      ]}
    />
  );
}
