var jour = prompt("quel jour sommes-nous");
if (jour === "lundi"){
    document.write("Demain nous sommes mardi")
} else if( jour === "mardi"){
    document.write("Demain nous somme mercredi")

} else if( jour === "mercredi"){
    document.write("Demain nous somme jeudi")

} else if( jour === "jeudi"){
    document.write("Demain nous somme vendredi")

} else if( jour === "vendredi"){
    document.write("Demain nous somme samedi")

} else if( jour === "samedi"){
    document.write("Demain nous somme dimanche")

} else if( jour === "dimanche"){
    document.write("Demain nous somme lundi")
} else {
    document.write("Jour inconnu ...")
}


switch(jour){
    case "lundi":
        console.log("Demain nous serons mardi");
        break;

    case "mardi":
        console.log("Demain nous serons mercerdi");
        break;

    case "mercredi":
        console.log("Demain nous serons jeudi");
        break;

    case "jeudi":
        console.log("Demain nous serons vendredi");
        break;

    case "vendredi":
        console.log("Demain nous serons samedi");
        break;

    case "samedi":
        console.log("Demain nous serons dimanche");
        break;

    case "dimanche":
        console.log("Demain nous serons lundi");
        break;
    default:
        console.log("Jour inconu ...")
}


    