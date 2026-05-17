import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Gizlilik Politikası — Lunora" };

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Yasal · Gizlilik"
      title="Gizlilik Politikası"
      subtitle="Lunora olarak verilerinin nasıl korunduğunu ve hangi durumlarda işlendiğini açık biçimde paylaşıyoruz."
      effectiveDate="01 Ocak 2026"
      sections={[
        {
          title: "Topladığımız Bilgiler",
          body: [
            "Web sitemizden alışveriş yaparken iletişim, teslimat ve ödeme bilgilerinizi alıyoruz. E-bülten kaydı olursa yalnızca e-posta adresinizi alırız. Çerezler aracılığıyla siteyi nasıl kullandığınıza dair anonim veri toplayabiliriz.",
          ],
        },
        {
          title: "Bilgilerinizi Nasıl Kullanıyoruz",
          body: [
            "Bilgilerinizi siparişinizi tamamlamak, kargo ve teslimat süreçlerini yürütmek, fatura kesmek, izniniz halinde pazarlama iletişimi yapmak ve site deneyimini iyileştirmek için kullanırız. Pazarlama iletişimine her zaman 'abonelikten çık' linkiyle son verebilirsiniz.",
          ],
        },
        {
          title: "Üçüncü Taraflarla Paylaşım",
          body: [
            "Bilgileriniz; kargo şirketleri (Yurtiçi Kargo, MNG Kargo, Aras Kargo), ödeme altyapı sağlayıcımız (iyzico) ve fatura/e-arşiv sağlayıcımız (Logo) ile paylaşılır. Bunun dışında resmi kurumların yasal talepleri dışında üçüncü taraflarla bilgilerinizi paylaşmıyoruz. Bilgilerinizi reklam ortakları ya da veri komisyoncularıyla paylaşmıyoruz.",
          ],
        },
        {
          title: "Güvenlik",
          body: [
            "Web sitemiz SSL şifrelemesi kullanır. Ödeme bilgileriniz hiçbir zaman sunucularımızda saklanmaz; doğrudan ödeme altyapı sağlayıcımıza iletilir. Şirket içi erişim, yalnızca rol bazlı yetkilendirme ile sağlanır.",
          ],
        },
        {
          title: "Verilerinizin Saklanma Süresi",
          body: [
            "Sipariş bilgileriniz yasal olarak 10 yıl saklanır (vergi ve ticaret hukuku gerekliliği). Pazarlama amacıyla aldığımız izin bazlı bilgileri, izninizi geri çekene kadar saklarız.",
          ],
        },
        {
          title: "Haklarınız",
          body: [
            "Verilerinizin silinmesini, düzeltilmesini veya bir kopyasını talep edebilirsiniz. Bunun için merhaba@lunora.com.tr adresine yazmanız yeterli.",
          ],
        },
      ]}
    />
  );
}
