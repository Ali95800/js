//alert("ali")

// -- Structure de base IF

if(true){// entre parenthese la position
    /*code*/
}

var nb1 = 10;
if(nb1 < 50){
    console.log("nb1 est bien inferieur à 50")
}

if(true){
    //code si true
} else {
    //code sinon
}

nb1 = 60;

if(nb1 < 50){
    console.log("nb1 est bien inferieur à 50")
} else {
    console.log("nb1 est bien superieur à 50")
}

//on utilise le If pour vérifier l'age de l'internaute.
//Si il est majeur on lui souhaite la bienvenue.
//Sinon [1] je lui signale et [2] le renvoie vers une autre page web.

var age =prompt (" Saisissez votre âge")
if(age > 17){
    console.log(" Majeur ")
    alert("Bienvenu sur notre magnifique site!")
}

else{
    alert("Désolé vous n'avez pas l'age autorisé pour accéder a notre site")
    window.location.href = "https://www.youtube.com/";
}

/*
var MajoriteFr = 18;

var age = parseInt(prompt ( "Indiquez votre age"));

if (age >= MajoriteFr){
    alert("Allez voir un autre super site...");
} else{
    alert("Allez voir ailleur...");
    document.location.href = "https://www.youtube.com/"
}*/