/*var note = parseInt(prompt("Saisissez votre note"));
var nb1 = 10;
var nb2 = 12;

if(!isNan(note) ){
    if(note => nb1){
        document.write("Recu sans mention");
    }else if(note => nb2){
        document.write("Recu avec mention");
    }
}else{
    document.write("Force à toi");
}*/

var moyenne = parseFloat (prompt("Quelle est ta moyenne?"));//nombre à virgule

if(moyenne < 10){
    document.write(" recalé !")
} else if((moyenne >= 10) && (moyenne < 12)){
    document.write(" tu passe")
} else if ((moyen >= 12) && (moyenne <= 20)){
    document.write(" tu passe avec mention")
} else{
    document.write(" et de 0 à 20 ça donne ?")
}