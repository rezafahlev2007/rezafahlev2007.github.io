var clicked = false;
function akhirfoto() {
  if (!clicked) {
  clicked = true;
  var contentDiv = document.getElementById("kontenstiker");

  var stiker2Div = document.createElement("div");
  stiker2Div.className = "stiker";
  stiker2Div.id = "stiker2";
  var img2 = document.createElement("img");


  stikersatu.style = "width:75px;height:75px";
  img2.src = fotoakhir6.src;
  img2.style = "width:75px;height:75px";

  stiker2Div.appendChild(img2);
  contentDiv.appendChild(stiker2Div);

  stiker1.style="transform:scale(0)";
  stiker2.style="position:absolute;transform:scale(0)";

  setTimeout(function() {
    stiker1.style="transform:scale(1)";
    stikersatu.src = fotoakhir5.src;
    stiker2.style="transform:scale(1)";
    setTimeout(function(){stiker2Div.classList.add("show");},200);
  }, 400);
  }
}

var date = new Date();
var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hours = date.getHours();
var minutes = date.getMinutes();

// Tambahkan awalan nol jika jam atau menit kurang dari 10
if (hours < 10) {hours = "0" + hours;}
if (minutes < 10) {minutes = "0" + minutes;}

var day = days[date.getDay()];
var dateNum = date.getDate();
var month = months[date.getMonth()];
var year = date.getFullYear();

console.log(hours + "." + minutes + " WIB - " + day + ", " + dateNum + " " + month + " " + year);

var element = document.querySelector("body");var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = day + ", " + dateNum + " " + month + " " + year + " - TikTok: feelthisray";
watermark.style = "color:white;opacity:.5;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:150";
element.appendChild(watermark);

//////////////////////////////////////////////////

  ftom=0;ftganti=0;flag=1;flagg=1;fungsi=0;fungsiAwal=0;pesanwhatsapp = pesanWA.innerHTML;Content.style = "opacity:1;margin-top:25vh;";
  function tunjukkan(){document.getElementById("sticky-ad").style = "bottom: 0px";}
  function hilangkan() {document.getElementById("sticky-ad").style = "bottom: -130px";}
  function memulai(){if(fungsiAwal==0){audio.play();fungsiAwal=1;suratin.style="transition:all .8s ease;transform:scale(10);opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(mulainama,700)}}

  async function mulainama() {
    suratin.style="display:none";ket.style="display:none";
    var { value: nama } = await swals.fire({
           title: 'Masukin nama kamu', input: 'text',
       });
       if(nama && nama.length < 11){
           window.nama = nama;namakamu.innerHTML=nama;
           namakamu2.innerHTML=nama;
           namakamu3.innerHTML=nama;
           kalimat.innerHTML+= nama + "! 🤭";
           kal1 = kalimat.innerHTML;kalimat.innerHTML="";
           kal2 = kalimatb.innerHTML;kalimatb.innerHTML="";
           kal22 = kalimatb2.innerHTML;kalimatb2.innerHTML="";
           kal3 = kalimatc.innerHTML;kalimatc.innerHTML="";
           kalimatd.style="position:absolute;opacity:0";

           tekskado1 = kado1.innerHTML;kado1.innerHTML="";
           tekskado2 = kado2.innerHTML;kado2.innerHTML="";
           tekskado3 = kado3.innerHTML;kado3.innerHTML="";

           Content.style = "opacity:1;margin-top:5vh";
           bodyblur.style="opacity:.4";
           wallpaper.style="transform: scale(1);";
           setTimeout(ftmuncul,200);
           bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
           setTimeout(mulaiketik1,300);fungsi=1;
       } else {
           await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');mulainama();
    }
  }
  stikersatu.src = fotoakhir.src;
  function ftmuncul(){
    if(ftganti==0){}
    if(ftganti==1){stikersatu.src = fotoakhir2.src;}
    if(ftganti==2){stikersatu.src = fotoakhir3.src;}
    if(ftganti==3){stikersatu.src = fotoakhir4.src;}
    if(ftganti==4){stikersatu.src = fotoakhir5.src;}
    stiker1.style="transform:scale(1)";
  }
  function fthilang(){stiker1.style="transform:scale(0)";}
  function jjfoto(){fotoakhir.style.animation="rto .8s infinite alternate";}

  function tombol(){ftom=1;Tombol.style="opacity:1;transform: scale(1);";if(fungsi==2){tmbl.innerHTML="💌 Balas";ftom=2;}}
  function multifungsi(){if(ftom==1){lanjut();} if(ftom==2){menuju();}}
  async function menuju(){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}

  function pilihankado() {
     fthilang();ftganti=3;setTimeout(ftmuncul,400);
     wallpaper.style="transform: scale(1);";
     kalimatd.style="display:none";kolombaru.style="display:none";
     if(rnkado==1){teksnimasi = tekskado1;}
     if(rnkado==2){teksnimasi = tekskado2;}
     if(rnkado==3){teksnimasi = tekskado3;}
     teksnimasikado();
  } 

  async function lanjut(){
      fthilang();ftganti=2;fungsi=2;
      setTimeout(ftmuncul,400);
      wallpaper.style="transform: scale(2);";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;margin-top:0;";
      Tombol.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
      kalimat.style="display:none";
      kalimatb.style="display:none";
      kalimatb2.style="display:none";
      kalimatc.style="display:none";
      kalimatd.style="position:relative;opacity:1;transform:scale(1);";
      kolombaru.style="position:relative;opacity:1;transform:scale(1);";
   }

  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + kal1], startDelay: 1, speed: 80, waitUntilVisible: true,
  afterComplete: function(){
    kalimat.innerHTML = kal1;
    setTimeout(mulaiketik2,500);
  },}).go();
  }
  function mulaiketik2(){
  new TypeIt("#kalimatb", {
  strings: ["" + kal2], startDelay: 1, speed: 50, waitUntilVisible: true,
  afterComplete: function(){
    kalimatb.innerHTML = kal2;
    setTimeout(mulaiketik22,700);
  },}).go();
  }
  function mulaiketik22(){
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=1;setTimeout(ftmuncul,400);
  kalimatb.style="display:none";
  new TypeIt("#kalimatb2", {
  strings: ["" + kal22], startDelay: 1, speed: 70, waitUntilVisible: true,
  afterComplete: function(){
    kalimatb2.innerHTML = kal22;
    setTimeout(mulaiketik3,700);
  },}).go();
  }
  function mulaiketik3(){
  wallpaper.style="transform: scale(1);";
  kalimatb.style="display:none";
  new TypeIt("#kalimatc", {
  strings: ["" + kal3], startDelay: 1, speed: 70, waitUntilVisible: true,
  afterComplete: function(){
    kalimatc.innerHTML = kal3;
    setTimeout(tombol,500);
  },}).go();
  }

  function teksnimasikado(){
  kado1.style="position:relative;opacity:1;transform:scale(1);";
  new TypeIt("#kado1", {
  strings: ["" + teksnimasi], startDelay: 1, speed: 60, waitUntilVisible: true,
  afterComplete: function(){
    kado1.innerHTML = teksnimasi;
    akhirfoto();
    fungsi=2;setTimeout(tombol,700);
    setInterval(createHeart,200);
  },}).go();
  }

  function createHeart() {const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); if (heartArr.length > 100) {heartArr[0].remove()}},100);