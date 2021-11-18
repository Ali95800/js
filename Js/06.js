//alert("ali")

var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2);//true
// == compare les valeurs

console.log(nb1 === nb2);//false
// === compare les valeurs et les types

console.log(nb1 != nb2);//false
// != different en valeur

console.log(nb1 !== nb2);//true
// !== different en valeur et en type

// ------------- Exercice -------------

var a = "20";
var p = "ali";
var prenom = prompt ("Saisissez votre prenom");

if(p == prenom){
    var age = prompt ("Saisissez votre âge");
}else{
    alert("Votre saisie est incorecte");
}

if(a == age){
    alert("bienvenue")
    
}else{
    alert("Votre saisie est incorecte");
}

/*
var prenom, monAge, prenomLogin, ageLogin;
prenom = "sonia";
monAge = 999;

prenonLogin = prompt(" quel est votre prenom?");
if(prenonLogin === prenom){
    ageLogin = parseInt(prompt("Votre age?"));
    if (ageLogin === monAge){ 
        alert("bienvenue" + prenomLogin);
    }else{
        alert("Erreur");
    }
}else{
    alert("Prénom non reconnu");
}*/