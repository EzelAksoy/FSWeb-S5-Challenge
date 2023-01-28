import axios from "axios";

const Card = (makale) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  const divHead = document.createElement("div");
  divHead.classList.add("headline");
  divHead.textContent = makale.anabaslik;
  cardDiv.appendChild(divHead);
  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);
  const divİmg = document.createElement("div");
  divİmg.classList.add("img-container");
  authorDiv.appendChild(divİmg);
  const image = document.createElement("img");
  image.setAttribute("src", makale.yazarFoto);
  divİmg.appendChild(image);
  const yazarİsim = document.createElement("span");
  yazarİsim.textContent = `${makale.yazarAdi} tarafından`;
  authorDiv.appendChild(yazarİsim);
  cardDiv.addEventListener("click", () => {});
  return cardDiv;
};

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const cardEkleyici = (secici) => {
  axios
    .get("http://localhost:5001/api/makaleler")
    .then((reponse) => {
      let makaleler = reponse.data.makaleler;
      for (let makale in makaleler) {
        makaleler[makale].forEach((a) => {
          const _secici = document.querySelector(secici);
          _secici.appendChild(Card(a));
        });
      }
    })
    .catch((error) => {
      console.log("hata bulundu" + error);
    });
};

cardEkleyici(".cards-container");
export { Card, cardEkleyici };
