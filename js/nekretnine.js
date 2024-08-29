const divStan = document.getElementById("stan");
const divKuca = document.getElementById("kuća");
const divPp = document.getElementById("pp");
const listaKorisnika = [];
let listaNekretnina = [];
let kriterij = {};
let filtriraneNekretnine = [];
let spisakNekretninaModul = SpisakNekretnina();

function spojiNekretnine(divReferenca, instancaModula, tip_nekretnine) {
  filtriraneNekretnine = instancaModula.filtrirajNekretnine({
    kriterij,
    tip_nekretnine,
  });
  for (let i = 0; i < filtriraneNekretnine.length; i++) {
    const nekretnina = filtriraneNekretnine[i];
    console.log("nekretnina" + nekretnina);
    const nekretninaElement = document.createElement("div");
    nekretninaElement.setAttribute("id", nekretnina.id);
    nekretninaElement.className = "grid-container";
    if (tip_nekretnine.toLowerCase() === "stan")
      nekretninaElement.classList.add("stan");
    else if (tip_nekretnine.toLowerCase() === "kuća")
      nekretninaElement.classList.add("kuća");
    else nekretninaElement.classList.add("pp");
    const slikaElement = document.createElement("img");
    slikaElement.src =
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225339233.jpg?k=8905fc88b0b809a6bb62fa4c735544b08133b44784f1ccd18a7921cdc76ceee5&o=&hp=1";
    slikaElement.alt = nekretnina.naziv || "slika_nekretnine";
    slikaElement.className = "slika";

    const nazivElementa = document.createElement("p");
    nazivElementa.className = "naziv";
    nazivElementa.textContent = `Naziv: ${nekretnina.naziv}`;

    const kvadratura = document.createElement("p");
    kvadratura.className = "kvadratura";
    kvadratura.textContent = `Kvadratura: ${nekretnina.kvadratura} m²`;

    const cijenaElement = document.createElement("p");
    cijenaElement.className = "cijena";
    cijenaElement.textContent = `Cijena: ${nekretnina.cijena} KM`;

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

    nekretninaElement.appendChild(slikaElement);
    nekretninaElement.appendChild(nazivElementa);
    nekretninaElement.appendChild(kvadratura);
    nekretninaElement.appendChild(cijenaElement);
    nekretninaElement.appendChild(detaljiElement);
    nekretninaElement.appendChild(pretrageElement);
    nekretninaElement.appendChild(klikoviElement);
    nekretninaElement.appendChild(dodatno);

    divReferenca.appendChild(nekretninaElement);
  }
}
