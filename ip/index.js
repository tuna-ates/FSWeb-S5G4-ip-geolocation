//axios import buraya gelecek
import axios from "axios";

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
    
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek
benimIP="46.197.117.88";
const getData= async()=>{
	await ipAdresimiAl();
axios.get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
.then((response)=>{
	console.log("ıp yüklendi=",response);
	
    document.querySelector(".cards").append(cardOlustur(response.data))

})
}
getData();

const cardOlustur=(nesne)=>{
	const genelCard=document.createElement("div");
	genelCard.classList.add("card");

	const baryrakImg=document.createElement("img");
	baryrakImg.setAttribute(`src`,  `https://flagsapi.com/${nesne.ülkeKodu}/flat/64.png`);
	genelCard.append(baryrakImg);


	const cardİnfo=document.createElement("div");
	cardİnfo.classList.add("card-info");
	genelCard.append(cardİnfo);

	//card info içrekikleri buradan sonrasını card infoya append etmeyi unutma!!
	const başlık=document.createElement("h3");
	başlık.classList.add("ip");
	başlık.textContent=nesne.sorgu;
	cardİnfo.append(başlık);

	 const ulke=document.createElement("p");
	 ulke.classList.add("ulke");
	 ulke.textContent=`${nesne.ülke} (${nesne.ülkeKodu})`;
	 cardİnfo.append(ulke);

	const enlemBoylam=document.createElement("p");
	enlemBoylam.textContent=`Enlem:${nesne.enlem} Boylam:${nesne.boylam}`;
	cardİnfo.append(enlemBoylam);

	const sehir=document.createElement("p");
	sehir.textContent=`Sehir:${nesne.şehir}`;
	cardİnfo.append(sehir);

	const saatDilimi=document.createElement("p");
	saatDilimi.textContent=`Saat dilimi: ${nesne.saatdilimi}`;
	cardİnfo.append(saatDilimi);

	const paraBirimi=document.createElement("p");
	paraBirimi.textContent=`Para birimi: ${nesne.parabirimi}`;
	cardİnfo.append(paraBirimi);

	const ısp=document.createElement("p");
	ısp.textContent=`ISP: ${nesne.isp}`;
	cardİnfo.append(ısp);

	return genelCard;

  }