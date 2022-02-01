// transforme la fonction javascript en une fonction générique 
// au moment de l'exécution de la fonction QUE l'on va déterminer le type du paramètre
function fonction1(a) {
    return a;
}
fonction1({ x: 1, y: 1 }); // typage par inférence 
fonction1({ x: 1, y: 1 }); // ajouter une annotation au moment de l'exécution de la fonction 
fonction1({ z: 1, d: 2 });
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// Partial 
// type Master = Partial<Etudiant> ;
// parcourir chaque propriété de l'interface et la rend facultative
function b(id) {
    if (id > 0)
        return "";
    return null;
}
var voiture = {
    annee: 2021
};
if (typeof voiture.marque != undefined) {
    console.log(voiture.marque);
}
else {
    console.log("pas de marque ???");
}
console.log(voiture === null || voiture === void 0 ? void 0 : voiture.toto);
// tsc 03-generic.ts && node 03-generic.js
// ts-node 03-generic.ts
// npm install -g ts-node
// tsc --init
