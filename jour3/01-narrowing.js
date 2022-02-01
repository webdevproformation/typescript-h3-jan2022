// jour3 
// créer le fichier 01-narrowing.ts 
function calcul(id) {
    if (id > 0) {
        return "Alain";
    }
    return 0;
}
var resultat = calcul(0);
// narrowing => réduire 
// assertion de type => au moment de l'exécution de la fonction 
var resultat2 = calcul(20); // stope de faire de verif 
// le dev sait mieux
var resultat3 = calcul(0);
// vérifier que la variable est de typeof == ""
if (typeof resultat3 == "string") { // type Guard 
    resultat3.toLowerCase();
}
else {
    resultat3.toFixed();
}
var a; // supprimer vérification des types par typescript 
function getPerson(id) {
    if (id == 1)
        return { nom: "etudiant" };
    return { nom: "formateur", role: "admin" };
}
var person = getPerson(1);
var person2 = getPerson(2);
if ("role" in person2) { // type Guard 
    person2;
}
else {
    person2;
}
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
function getInfo(i) {
    if (i == 0) {
        return new A();
    }
    return new B();
}
var test = getInfo(0);
if (test instanceof A) {
    test;
}
else {
    test;
}
var balise = document.querySelector(".hello");
var balise2 = document.querySelector(".hello");
if (balise2 instanceof HTMLButtonElement) {
    balise2;
}
var toto = "bonjour"; // const toto = new String("bonjour")
var titi = String("titi");
var tata = String("tata");
function T(truc) {
    if (truc === void 0) { truc = 0; }
    this.truc = truc;
}
var t = T();
var t1 = new T();
// cas pratique :
// dans le dossier jour3 créer le fichier 02-exo.ts 
// function addLeg(animal: Animal) {
//  animal.legs = animal.legs + 1; // 💥 - Object is possibly 'undefined'
// }
// utiliser deux techniques de narrowing pour que cette fonction ne déclenche pas d'erreur dans typescript 
