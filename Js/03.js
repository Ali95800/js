// 1. Addition

// Je d"clare plusieur variables
var nb1, nb2, resultat;

//J'affecte des valeurs

nb1 = 10;
nb2 = 5;

//J'utilise mes variables avec calcul
resultat = nb1 + nb2;

// J'affiche le résultat dans la console
console.log(resultat);

// -- 2. Soustractions
resultat = nb1 - nb2;
console.log(resultat)

// -- 3. Multplications
resultat = nb1 * nb2;
console.log(resultat)

// -- 4. Divisions
resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// Le modulo retoune le reste d'une division
resultat = nb1 % nb2;
console.log(resultat);

nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est egal a : " +resultat);

// -- 6. Ecriture simplifiées
nb1 = 15;
nb1 = nb1 + 5; // égal a 20

nb1 += 10 // nb1 = nb1 + 10
console.log('Le résultat de "nb1 += 10" est ' +nb1);

nb2 -= 2
console.log(nb2);// l'ecriture simplifiée fonctionne aussi avec les autres opérateurs

// Je peux échapper un caractere avec un anti-slash (alt gr + 8)