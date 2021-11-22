var mois = parseInt (prompt("Sélectionnez votre mois", "saisir un chiffre entre 1 et 12"));

if(mois = 2){
    document.write(" Il y à 28 jours ce mois ci !")
} else if((mois === 4)|| (mois === 6)|| (mois === 9)|| (mois === 11)){
    document.write(" ce moit fait 30jours")
}else if((mois === 1)|| (mois === 3)|| (mois === 7)|| (mois === 18) || (mois12)){
    document.write(" ce moit fait 31jours")
}else{
    alert ("saisie hors calendier")
}