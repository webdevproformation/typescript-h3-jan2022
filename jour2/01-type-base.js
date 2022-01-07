// type de base :
// tuple (Python)
// tableau nombre items déterminés et typé
var tableau = [1, 2, 3, 4, 6, 8];
var tableau2 = [1, 2, 3, 4, 6, 8];
// pas de nombre d'éléments maximum ou minimum pour le tableau
// tuple
var adresse = ["75 rue de Paris", 75000, "Paris"];
// 3 valeurs : string / number / string
// enum 
// enum => type qui permet de stocker des constantes dans une variable 
// rôle des utilisateurs 
// rôle : admin / redacteur / anonyme
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["redacteur"] = 1] = "redacteur";
    Role[Role["anonyme"] = 2] = "anonyme";
})(Role || (Role = {}));
function creerArticle(data, role) {
    if (role == Role.admin || role == Role.redacteur) { // utiliser comme valeur 
        return "vous pouvez lire et rédiger des articles";
    }
    if (role == Role.anonyme) {
        return "vous pouvez lire uniquement des articles";
    }
}
var resultat = creerArticle({ titre: "A", contenu: "B" }, Role.admin); // variable 
console.log(resultat);
// cd jour2
// tsc 01-type-base.ts && node 01-type-base.js
// type enumeré sans valeur
var Role2;
(function (Role2) {
    Role2[Role2["admin"] = 0] = "admin";
    Role2[Role2["redacteur"] = 1] = "redacteur";
    Role2[Role2["anonyme"] = 2] = "anonyme";
})(Role2 || (Role2 = {}));
// constante Role2 qui a 3 propriétés (SANS valeur)
// utiliser Role2.admin => clé 
// énuméré avec valeur de type string 
var Couleurs;
(function (Couleurs) {
    Couleurs["color"] = "#000";
    Couleurs["background"] = "#fff";
    Couleurs["border"] = "#eee";
})(Couleurs || (Couleurs = {}));
;
var info = Couleurs.background;
console.log(info); // "#fff",
var Role3;
(function (Role3) {
    Role3[Role3["admin"] = 0] = "admin";
    Role3[Role3["redacteur"] = 1] = "redacteur";
    Role3[Role3["anonyme"] = 2] = "anonyme";
})(Role3 || (Role3 = {}));
console.log(Role3.admin); // 0
console.log(Role3.anonyme); // 2
