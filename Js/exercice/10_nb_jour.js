var date = new Date();
var listeNbrJours = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var mois = date.getMonth();
var nbJours = listeNbrJours[mois];
if (isAnneeBisextile(date.getYear())) {
  nbJours++;
}