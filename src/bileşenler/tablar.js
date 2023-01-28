import axios from "axios";
const Tablar = (konu) => {
  const divTopics = document.createElement("div");
  divTopics.className = "topics";
  for (let i = 0; i < konu.length; i++) {
    const konu_ = document.createElement("div");
    konu_.classList.add("tab");
    konu_.textContent = konu[i];
    divTopics.appendChild(konu_);
  }
  console.log(divTopics);
  return divTopics;
};

const tabEkleyici = (secici) => {
  axios
    .get("http://localhost:5001/api/konular")
    .then((reponse) => {
      console.log(reponse);
      let konular = reponse.data.konular;
      const _secici = document.querySelector(secici);
      _secici.appendChild(Tablar(reponse.data.konular));
    })
    .catch((error) => {
      console.log("hata bulundu" + error);
    });
};

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

export { Tablar, tabEkleyici };
