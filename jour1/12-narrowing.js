// narrow => réduire / restreindre 
function calcul(a, b) {
    if (a > b) {
        return "valeur invalide";
    }
    return a + b;
}
var resultat = calcul(10, 2);
// restreindre les possibilités de retour de la fonction 
if (typeof resultat === "string") { // narrowing vérifier le type de la variable et uniquement si cette condition est vrai ALORS l'instruction est VRAIE
    resultat.toUpperCase();
}
if (typeof resultat === "number") {
    resultat.toFixed(4);
}
/* const input = document.querySelector(".element") // {} | undefined

if(input){
    input
} */
function formation(a) {
    if (a > 0) {
        return a.toString();
    }
    return;
}
var resultat2 = formation(-10);
if (resultat2) { // narrowing 
    console.log(resultat2.toUpperCase());
}
console.log(resultat2 === null || resultat2 === void 0 ? void 0 : resultat2.toUpperCase()); // narrowing
var resultat3 = formation(-40);
console.log(resultat3.toUpperCase()); // sur que resultat3 est de type string => sur à 100%
