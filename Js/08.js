//La boucle FOR

/*
Les boucles 
*/

/*
for(3 erguments){
    code
}
1. Initialise un compteur,  par défaut on utilise i
2. Condition à vérifier (vrai)
3. "Pas" d'incrémentation -> conbien j'ajoute par tour (i++)
*/

for (var i = 1; i<=10; i+=2){
    document.write("<p> Instruction exécutée : " + 1 + ".</p>");
}

// La boucle WHILE (tant que)
var j = 1;
while (j <= 10){
    document.write("<p> Instruction exécutée : " + j + "fois.</p>");
    j++;
}

// Exercie
/* J'ai 1000€ sur mon compte chaque mois j'ajoute 50€ combiens de emps me faut-il pour avoir 200€ sur mon compte*/

for (var mois = 1000; mois<=2000; mois+=50){
    document.write("<p> Instruction exécutée : " + mois + ".</p>");
}  

var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps++;
}
document.write("<p> Sous sur mon compte : " + monCompte + ".</p>");
document.write("<p> Jusqu'a 2000€ il me faut : " + (temps/12) + " années.</p>");