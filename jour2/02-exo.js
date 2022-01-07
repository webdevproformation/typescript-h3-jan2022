var Config;
(function (Config) {
    Config["root"] = ".";
    Config["domaine"] = "http://localhost";
    Config[Config["port"] = 3000] = "port";
    //route = Route 
})(Config || (Config = {}));
;
var Route;
(function (Route) {
    Route[Route["POST"] = 0] = "POST";
    Route[Route["DELETE"] = 1] = "DELETE";
    Route[Route["GET"] = 2] = "GET";
    Route[Route["PUT"] = 3] = "PUT";
})(Route || (Route = {}));
var connexionBdd = function (domaine, port) {
    return "je suis connect\u00E9 sur la base disponible \u00E0 l'adresse ".concat(domaine, ":").concat(port);
};
var resultat2 = connexionBdd(Config.domaine, Config.port);
console.log(resultat2);
// tsc 02-exo.ts && node 02-exo.js
