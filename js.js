import { KUTYALISTA } from "./adatok.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";
import {rendezesNevSzerint} from "./rendezesSzures.js"
window.addEventListener("load", init);
let ARTICLE;
let kartyak;
let tablazat;
/* const KUTYANEVEK=["Bodri","Kutya","Vak","Sovika","Lédi","Lessie"]
const KUTYAFAJTAK = ["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]
const KUTYAKOROK = [12, 8, 14, 11, 12, 9] */
function init() {
  rendezesNevSzerint(KUTYALISTA, "kor");
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  /* const GOMB = document.createElement('button');
    GOMB.innerText = ('Kutya');
    ARTICLE.appendChild(GOMB); */
  /* GOMB.addEventListener("click", function(){gombNyomas(ARTICLE)}) */
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", ujKutya);
}

/* function gombNyomas (ARTICLE){
    ARTICLE.innerHTML += KUTYALISTA[2];
} */

/* function osszeallit(){
    let txt = ""
    for (let index = 0; index < KUTYANEVEK.length; index++) {
        txt += `<div id = "${KUTYANEVEK[index]}">
        <p> nev: ${KUTYANEVEK[index]} </p>
        <p> kor: ${KUTYAKOROK[index]} </p>
        <p> fajta: ${KUTYAFAJTAK[index]} </p>
        
        </div>`
        
    }
    console.log(txt);
    return txt;
} */

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}

function ujKutya() {
  const KUTYA = {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  const ADAT = document.querySelectorAll("input");
  console.log("Vauka");
  /*szedjük össze az űrlap adatait,
  és tegyük bele az objektumba
  és füzzük hozzá a KUTYALISTA-hoz*/
  const NEVINPUTELEM = document.querySelector("#kneve");
  KUTYA.nev = NEVINPUTELEM.value;
  const KORINPUTELEM = document.querySelector("#kkor");
  KUTYA.kor = KORINPUTELEM.value;
  const FAJTAINPUTELEM = document.querySelector("#kfajta");
  KUTYA.fajta = FAJTAINPUTELEM.value;
  const LABINPUTELEM = document.querySelector("#klaba");
  KUTYA.lab = LABINPUTELEM.value;
  const NEMINPUTELEM = document.querySelector("#szuka")
  if (NEMINPUTELEM.checked){
    KUTYA.nem = "szuka";
  }else{
    KUTYA.nem = "kan";
  }
  const MMAGINPUTELEM = document.querySelector("#mmag");
  KUTYA.marmagasság = MMAGINPUTELEM.value;
/*   let index = 0;
  for (const kulcs in KUTYALISTA[index]) {
    if ((ADAT[index].id == "szuka") & (szuka.checked == true)) {
      console.log("szuka");
      Kutya[kulcs] = "szuka";
      index++;
    } else if ((ADAT[index].id == "kan") & (kan.checked == true)) {
      console.log("kan");
      Kutya[kulcs] = "kan";
    } else {
      Kutya[kulcs] = `${ADAT[index].value}`;
    }
    index++;
  } */
  KUTYALISTA.push(KUTYA);
  console.log(KUTYALISTA);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}
