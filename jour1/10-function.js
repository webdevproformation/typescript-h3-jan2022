// 10-function.ts
function calcul(largeur, hauteur) {
    return (largeur * hauteur).toString();
}
// fonction fléchée 
var division = function (a, b) {
    return "" + a / b;
};
// fonction ne retourne rien ne contient pas le mot clé return 
var afficher = function (text) {
    console.log(text);
};
var deplacer = function (point, deplacementX, deplacementY) {
    return {
        x: point.x + deplacementX,
        y: point.y + deplacementY
    };
};
console.log(deplacer({ x: 15, y: 0 }, 3, -5).x);
// tsc 10-function.ts && node 10-function.js
