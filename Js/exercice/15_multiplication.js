var nombre = parseInt (prompt("Entrez un chiffre"));
while( nombre > 1 || nombre < 10 )
if( nombre >=2 &&  nombre <= 9){
    for (i = 1; i <= 10; i++) {
    document.write(nombre+ " x " +i+ " = "+nombre*i+"<br>");
    }
    break
}else(
    prompt("Entrez un chiffre entre 2 et 9")
)

/*
var choix = prompt(" choisi s un nombre entre 2 et 9 :")
while (( choix >1) || (choix < 10)){
    if((choix >= 2) && (choix <=9)){
        for (i = 1; i <= 10; i++) {
            var resultat = choix *i
            document.write(choix + " x " + 1 + " = " + resultat + "<br>");
        }
        break    
    } else {
        choix = Number(prompt("Entrez un nombre entre 2 et 9"))
    }
}

Une autre correction Exercice 15 :


let input = Number.parseInt(prompt("Please, enter a number between 1 and 9 to display the multiplication table."));
let i = 1;
let result = 0;
 
while (!((input > 1) && (input < 10))) { // tant que input n'est pas strictement supérieur à 1 et strictement inférieur à 10, soit compris entre 1 et 10
    alert("You have to write a number between 1 and 9.");
    input = Number.parseInt(prompt("Try again, enter a number between 1 and 9."));
}
for (i = 1; i < 10; i++) {
    result = input * i;
    document.write("<p>" + input + " * " + i + " = " + result + "</p>");
}*/