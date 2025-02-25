let SpisakNekretnina = function () {
  let listaNekretnina = [];
  let listaKorisnika = [];

  let init = function (nekretnine, korisnici) {
    listaNekretnina = nekretnine;
    listaKorisnika = korisnici;
  };
  let filtrirajNekretnine = function (kriterij) {
    let filtriraneNekretnine = [];
    for (let i = 0; i < listaNekretnina.length; i++) {
      let nekretnina = listaNekretnina[i];
      if (
        (kriterij.tip_nekretnine == null ||
          nekretnina.tip_nekretnine === kriterij.tip_nekretnine) &&
        (nekretnina.kvadratura >= kriterij.min_kvadratura ||
          kriterij.min_kvadratura == null) &&
        (kriterij.max_kvadratura == null ||
          nekretnina.kvadratura <= kriterij.max_kvadratura) &&
        (kriterij.max_cijena == null ||
          nekretnina.cijena <= kriterij.max_cijena) &&
        (kriterij.min_cijena == null ||
          nekretnina.cijena >= kriterij.min_cijena)
      ) {
        filtriraneNekretnine.push(nekretnina);
      }
    }
    return filtriraneNekretnine;
  };

  let ucitajDetaljeNekretnine = function (id) {
    return listaNekretnina.find((nekretnina) => nekretnina.id === id) || null;
  };

  return {
    init: init,
    filtrirajNekretnine: filtrirajNekretnine,
    ucitajDetaljeNekretnine: ucitajDetaljeNekretnine,
  };
};
window.SpisakNekretnina = SpisakNekretnina;
