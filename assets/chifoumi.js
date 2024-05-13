const PIERRE = 1,
  FEUILLE = 2,
  CISEAUX = 3;

let score = {
  joueur: 0,
  ordi: 0,
  egalite: 0,
};

let chifoumi = function (joueur) {
  // let score = new Array(3);

  document.querySelector("#choixJoueur").src = "images/" + joueur + ".jpg";

  let signes = document.querySelectorAll(".signes");
  //FOR OF
  /**
   * Pour chaque élément du tableau signes...
   * a chaque tour de boucles (=iteération), la variable element
   * va prendre la valeur suivant du tableau
   */
   /*for(let element of ) {element.style.border = "none";

   }*/

  document.querySelector("#signeJoueur" + joueur).style.border = "1px solid blue";

  /* 
    Math est une bibliothèque de fonctions intégrée à JS.
    Pour utiliser les fonctions de cette bibliothèque, il faut toujours
    préciser Math.
    Math.random retourne un nombre réel aléatoire entre 0 et 1.
    Math.round permet d'arrondir une valeur décimale.

    Pour avoir un nombre aléatoire entre min et max : 
    Math.round(Math.random() * (max - min)) + min
    */
  /************************ORDI********************** */
  let ordi;
  if (!document.querySelector("#triche").checked == true) {
    ordi = Math.round(Math.random() * 2) + 1;
  } else {
    /* TRICHE : l'ordinateur gagne toujours */
    switch (joueur) {
      case PIERRE:
        ordi = FEUILLE;
        break;

      case FEUILLE:
        ordi = CISEAUX;
        break;

      case CISEAUX:
        ordi = PIERRE;
    }
  }

  document.querySelector("#choixOrdi").src = "images/" + ordi + ".jpg";
  document.querySelector("#signeOrdi" + ordi).style.border = "1px solid red";
  /************************ORDI********************** */

  let message = document.getElementById("message");
  // let message = document.querySelector("#message");
  if (ordi == joueur) {
    message.innerHTML = "Égalité";
    // score.egalite = score.egalite + 1;
    // score.egalite += 1;
    score.egalite++;
  } else if (
    (joueur == PIERRE && ordi == CISEAUX) ||
    (joueur == FEUILLE && ordi == PIERRE) ||
    (joueur == CISEAUX && ordi == FEUILLE)
  ) {
    message.innerHTML = "Gagné !!!";
    score.joueur++;
    document.querySelector("#scoreJoueur").innerHTML = score.joueur
  } else {
    message.innerHTML = "Perdu !";
    score.ordi++;
    document.querySelector("#scoreOrdi").innerHTML = score.ordi
  }

  console.log(score);
};
