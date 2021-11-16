valeur = parseInt (prompt ("Le prix hors taxe"))
var taxe = valeur * 0.2;
var total = valeur + taxe ;
console.log(taxe);
console.log(total);
document.write( " la taxe est de " + taxe + " € " + "<br>" + " le prix total est de " + total + " € ");

// var horsTaxe = prompt ("ht")
//console.log(horsTaxe * 1.2)
// document.write(horsTaxe*1.2)