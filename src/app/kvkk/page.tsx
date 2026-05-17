import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "KVKK Aydınlatma Metni — Lunora",
};

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow="Yasal · KVKK"
      title="Aydınlatma Metni"
      subtitle="6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu olarak yükümlülüklerimiz."
      effectiveDate="01 Ocak 2026"
      sections={[
        {
          title: "Veri Sorumlusu",
          body: [
            "Lunora Ev Ritüelleri A.Ş. ('Lunora' / 'Şirket'), Yıldırım Mh. Atatürk Cad. No: 88, Söğüt/Bilecik adresinde mukim ve İstanbul Ticaret Sicili'ne 504827-5 sicil numarasıyla kayıtlı bir anonim şirkettir.",
            "Veri sorumlusu sıfatıyla, kişisel verilerinizin işlenmesine ilişkin aydınlatma yükümlülüğümüz çerçevesinde işbu metin hazırlanmıştır.",
          ],
        },
        {
          title: "İşlenen Kişisel Veri Kategorileri",
          body: [
            "Kimlik verisi (ad, soyad), iletişim verisi (e-posta, telefon, adres), müşteri işlem verisi (sipariş bilgileri, alışveriş geçmişi), pazarlama verisi (tercihleriniz, alışveriş alışkanlıklarınız), hukuki işlem verisi (fatura, dekont) ve site kullanım verisi (IP, çerezler, oturum bilgileri) işlenmektedir.",
          ],
        },
        {
          title: "Kişisel Verilerinizin İşlenme Amaçları",
          body: [
            "Kişisel verileriniz; siparişinizin tamamlanması, ödeme süreçlerinin yürütülmesi, kargo ve teslimat süreçlerinin sağlanması, müşteri memnuniyetine ilişkin süreçlerin yönetimi, yasal yükümlülüklerin yerine getirilmesi, izniniz halinde pazarlama faaliyetleri ve site deneyiminin iyileştirilmesi amaçlarıyla işlenmektedir.",
          ],
        },
        {
          title: "Kişisel Verilerinizin Aktarımı",
          body: [
            "Kişisel verileriniz, kargo ve lojistik hizmet sağlayıcılarımız (Yurtiçi Kargo, MNG Kargo, Aras Kargo), ödeme altyapı sağlayıcımız (iyzico), e-fatura/e-arşiv sağlayıcımız, yasal denetim kurumları ve mahkeme/idari makam taleplerine cevaben yetkili kurum/kuruluşlara aktarılabilir.",
          ],
        },
        {
          title: "KVKK Madde 11 Uyarınca Haklarınız",
          body: [
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, aktarılan üçüncü kişileri öğrenme ve yasaya aykırı işleme sebebiyle uğradığınız zararın giderilmesini talep etme haklarına sahipsiniz.",
            "Bu haklarınızı kullanmak için merhaba@lunora.com.tr adresine kimliğinizi tevsik edici belgelerle başvurabilirsiniz.",
          ],
        },
        {
          title: "İletişim",
          body: [
            "Aydınlatma metniyle ilgili soru ve görüşlerinizi merhaba@lunora.com.tr adresine iletebilirsiniz.",
          ],
        },
      ]}
    />
  );
}
