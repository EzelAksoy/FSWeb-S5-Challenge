const Header = (baslik, tarih, yazi) => {
  const header_ = document.createElement("div");
  header_.className = "header";
  const tarih_ = document.createElement("span");
  tarih_.classList.add("date");
  tarih_.textContent = tarih;
  const baslik_ = document.createElement("h1");
  baslik_.textContent = baslik;
  const yazi_ = document.createElement("span");
  yazi_.className = "temp";
  yazi_.textContent = yazi;
  header_.appendChild(tarih_);
  header_.appendChild(baslik_);
  header_.appendChild(yazi_);
  return header_;
};

// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const headerEkleyici = (secici) => {
  document
    .querySelector(secici)
    .appendChild(
      Header("ALIŞVERİŞ MERKEZİ", "28.01.2023", "ARADIĞINIZ HERŞEY")
    );

  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
