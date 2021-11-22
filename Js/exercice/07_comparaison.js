/*var nb1 = parseInt( prompt ("Saisissez un nombre"));
var nb2 = parseInt( prompt ("Saisissez un nombre"));

if (nb1 > nb2){
    document.write ( nb1 + " " + "est supérieur à" + " " + nb2 );
}else if( nb2 > nb1){
    document.write.write ( nb2 + " " + "est supérieur à" + " " + nb1);
}else if (nb1 = nb2){
    document.write(nb1 + " " + "est égal à" + " " + nb2);
}else{
    alert("l'une de vos données saisie n'est pas correcte")
}*/



var nb1 = parseInt (prompt("Entrez votre premier nombre"));
var nb2 = parseInt (prompt("Entrez votre second nombre"));

if((!isNan(nb1)) && (!isNan(nb2)) ){
    if(nb1 < nb2){
        document.write("Votre premier : " + nb1 + " " + " est plus petit que votre 2nd : " + nb2 )
    }else if ( nb1 > nb2){
        document.write("Votre premier : "+ nb1 + " " + "est plus grand que votre 2nd : " + nb2 )
    }else{
        document.write("Votre premier : " + nb1 + " " + "est égal à votre 2nd : " + nb2 )
    }
}else{
    alert(" vous avez pas saisi de chiffre");
}
