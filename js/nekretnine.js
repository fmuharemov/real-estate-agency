function spojiNekretnine(divReferenca, instancaModula, tip_nekretnine) {
  let kriterij = {
    tip_nekretnine: tip_nekretnine,
  };
  let filtriraneNekretnine = instancaModula.filtrirajNekretnine(kriterij);
  divReferenca.innerHTML = "";
  for (let i = 0; i < filtriraneNekretnine.length; i++) {
    const nekretnina = filtriraneNekretnine[i];
    console.log("nekretnina" + nekretnina.tip_nekretnine); //obrisi
    const nekretninaElement = document.createElement("div");
    nekretninaElement.className = "grid-container";
    nekretninaElement.classList.add("grid-item");
    if (tip_nekretnine.toLowerCase() === "stan") nekretninaElement.id = "stan";
    else if (tip_nekretnine.toLowerCase() === "kuca")
      nekretninaElement.id = "kuca";
    else nekretninaElement.id = "pp";

    const slikaElement = document.createElement("img");
    slikaElement.src = nekretnina.slika;
    slikaElement.alt = nekretnina.naziv || "slika_nekretnine";
    slikaElement.id = "objekat";

    const nazivElementa = document.createElement("p");
    nazivElementa.className = "lokacija";
    nazivElementa.textContent = `Lokacija: ${nekretnina.lokacija}`;

    const kvadratura = document.createElement("p");
    kvadratura.className = "kvadratura";
    kvadratura.textContent = `Kvadratura: ${nekretnina.kvadratura} m²`;

    const cijenaElement = document.createElement("p");
    cijenaElement.className = "cijena";
    cijenaElement.textContent = `Cijena: ${nekretnina.cijena} KM`;
    /*
    const detaljiElement = document.createElement("button");
    detaljiElement.setAttribute("onclick", "dodatnoOtvaranje(this.parentNode)");
    detaljiElement.className = "detalji";
    detaljiElement.textContent = "Detalji";
    const pretrageElement = document.createElement("span");
    pretrageElement.className = "pretrage";
    pretrageElement.textContent = `Pretrage: ${nekretnina.pretrage || 0}   `;

    const klikoviElement = document.createElement("span");
    klikoviElement.className = "klikovi";
    klikoviElement.textContent = `Broj klikova: ${nekretnina.klikovi || 0}`;

    const otvoriDetalje = document.createElement("button");
    otvoriDetalje.textContent = "Otvori detalje";
    otvoriDetalje.setAttribute(
      "onclick",
      "otvoriDetalje(this.parentNode.parentNode)"
    );
    otvoriDetalje.classList.add("detalji");
    const godinaIzgradnje = document.createElement("div");
    godinaIzgradnje.textContent =
      "Godina izgradnje: " + nekretnina.godina_izgradnje;
    const lokacija = document.createElement("div");
    lokacija.textContent = "Lokacija: " + nekretnina.lokacija;
    const dodatno = document.createElement("div");
    dodatno.setAttribute("style", "display: none");
    dodatno.appendChild(lokacija);
    dodatno.appendChild(godinaIzgradnje);
    dodatno.appendChild(otvoriDetalje);
*/
    divReferenca.appendChild(nekretninaElement);
    nekretninaElement.appendChild(slikaElement);
    nekretninaElement.appendChild(nazivElementa);
    nekretninaElement.appendChild(kvadratura);
    nekretninaElement.appendChild(cijenaElement); /*
    nekretninaElement.appendChild(detaljiElement);
    nekretninaElement.appendChild(pretrageElement);
    nekretninaElement.appendChild(klikoviElement);
    nekretninaElement.appendChild(dodatno);*/
  }
}
const divStan = document.getElementById("stan");
const divKuca = document.getElementById("kuca");
const divPp = document.getElementById("pp");

const listaNekretnina = [
  {
    id: 1,
    tip_nekretnine: "Stan",
    lokacija: "Grbavica",
    kvadratura: 75,
    cijena: 232000,
    slika: "../images/1.jpg",
  },
  {
    id: 4,
    tip_nekretnine: "Stan",
    lokacija: "Hrasno",
    kvadratura: 35,
    cijena: 90000,
    slika: "../images/2.jpg",
  },
  {
    id: 5,
    tip_nekretnine: "Stan",
    lokacija: "Grbavica",
    kvadratura: 35,
    cijena: 90000,
    slika: "../images/3.jpg",
  },
  {
    id: 6,
    tip_nekretnine: "Stan",
    lokacija: "Marindvor",
    kvadratura: 105,
    cijena: 420000,
    slika: "../images/4.jpg",
  },
  {
    id: 8,
    tip_nekretnine: "Kuća",
    lokacija: "Bistrik",
    kvadratura: 70,
    cijena: 190000,
    slika: "../images/k1.jpg",
  },
  {
    id: 9,
    tip_nekretnine: "Kuća",
    lokacija: "Vlašić",
    kvadratura: 80,
    cijena: 210000,
    slika: "../images/k2.jpg",
  },
  {
    id: 10,
    tip_nekretnine: "Kuća",
    lokacija: "Poljine",
    kvadratura: 100,
    cijena: 560000,
    slika: "../images/k3.jpg",
  },
  {
    id: 2,
    tip_nekretnine: "Poslovni prostor",
    lokacija: "Pofalići",
    kvadratura: 25,
    cijena: 70000,
    slika: "../images/pp1.jpg",
  },
  {
    id: 3,
    tip_nekretnine: "Poslovni prostor",
    lokacija: "Ilidža",
    kvadratura: 20,
    cijena: 70000,
    slika: "../images/pp2.jpg",
  },
  {
    id: 7,
    tip_nekretnine: "Poslovni prostor",
    lokacija: "Skenderija",
    kvadratura: 30,
    cijena: 150000,
    slika: "../images/pp3.jpg",
  },
];

const listaKorisnika = [
  {
    id: 1,
    ime: "Neko",
    prezime: "Nekic",
    username: "username1",
  },
  {
    id: 2,
    ime: "Neko2",
    prezime: "Nekic2",
    username: "username2",
  },
];

//instanciranje modula
let nekretnine = SpisakNekretnina();
nekretnine.init(listaNekretnina, listaKorisnika);

//pozivanje funkcije
spojiNekretnine(divStan, nekretnine, "Stan");
spojiNekretnine(divKuca, nekretnine, "Kuća");
spojiNekretnine(divPp, nekretnine, "Poslovni prostor");
