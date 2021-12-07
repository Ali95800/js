
var choix = "";
var i = 1;

while ((choix !== "oui") && (choix !== "non")){
    choix = prompt("Allez on joue a ni oui ni non?");
    document.write('"' + choix + '" n\'est pas une réponse pr la ' + i + "° fois tu veux jouer a ni oui ni non <br>")
    i++;
}
document.write("<p style = background-color: cyan; text-align:center;> Perdu ;-) tu as tenu " + i + "tour")