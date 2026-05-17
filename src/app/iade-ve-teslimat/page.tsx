import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "İade & Teslimat — Lunora" };

export default function ShippingPage() {
  return (
    <LegalPage
      eyebrow="Yardım · Kargo & İade"
      title="İade ve Teslimat Koşulları"
      subtitle="Lunora ile alışveriş yaparken hangi sürelere ve süreçlere güvenebileceğin."
      effectiveDate="01 Ocak 2026"
      sections={[
        {
          title: "Kargo Süreleri",
          body: [
            "Türkiye genelinde standart kargoda 2-3 iş günü, İstanbul içi aynı gün kargoda 3-6 saat içinde teslimat sağlıyoruz.",
            "Hafta sonu ve resmi tatillerde kargo işlemleri sınırlıdır; siparişler ilk iş günü yola çıkar.",
          ],
        },
        {
          title: "Kargo Ücreti",
          body: [
            "3.500 TL ve üzeri tüm siparişlerde kargo ücretsizdir. Standart kargo ücreti 89 TL, İstanbul içi aynı gün kargo 149 TL'dir. Kargo ücreti ödeme adımında otomatik hesaplanır.",
          ],
        },
        {
          title: "Ücretsiz İade Süresi",
          body: [
            "Açılmamış ve hijyen kapsamına girmeyen ürünleri 14 gün içinde ücretsiz iade edebilirsin. Müşteri memnuniyetimiz bizim için önceliklidir; sorunu çözmek için ekibimiz seninle iletişimde olacaktır.",
          ],
        },
        {
          title: "İade Kapsamı Dışında",
          body: [
            "Hijyen gereği açılmış bakım ve cilt ürünleri, kişiselleştirilmiş/üzerine isim yazılmış hediyeler ve outlet kategorisindeki sınırlı sayıda ürünler iade kapsamı dışındadır.",
          ],
        },
        {
          title: "İade Süreci",
          body: [
            "Hesabım > Siparişlerim sayfasından 'İade Talep Et' butonuna tıklayarak süreci başlatabilirsin.",
            "İade onayı sonrası anlaşmalı kargo şirketimiz adresinden iade ürünü almak için seninle iletişime geçer.",
            "İade ürünü atölyemize ulaştıktan sonra 5 iş günü içinde ödemen geri yatırılır.",
          ],
        },
        {
          title: "Hatalı / Hasarlı Ürün",
          body: [
            "Ürünün yanlış geldiyse, eksik geldiyse ya da hasarlıysa, teslim aldıktan sonra 48 saat içinde merhaba@lunora.com.tr adresine fotoğraflı şekilde bildirim göndermen yeterli. Tüm kargo masrafları bize aittir.",
          ],
        },
      ]}
    />
  );
}
