alert("coucou")

// L'operateur Et : && ou AND

if((prenomLogin === prenom)  && ( ageLogin === monAge)){
    //code bon si les deux instructions sont vraies
}

if ((a)  && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI

// L'operateur OU : || ou OR (| = barre oblique = pipe = alt + 6)

if ((c) && (D)){...}
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI

// L'opérateur "!" signifie le contraire de ...
var utilisateurLog = true
if(!utilisateurLog){
    //si utilisateur pas loggé
}
//ce qui revient a écrire
if(utilisateurLog == false){
    //si utilisateur pas loggé
}