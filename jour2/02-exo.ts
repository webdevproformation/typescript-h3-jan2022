enum Config {
    root = ".",
    domaine = "http://localhost" ,
    port = 3000,
    //route = Route 
};// clarifier le code !! 

enum Route {
    POST,DELETE,GET,PUT
}


const connexionBdd = (domaine : Config , port : Config) : string => {
    return `je suis connecté sur la base disponible à l'adresse ${domaine}:${port}` ;
}

const resultat2 = connexionBdd( Config.domaine , Config.port ); 

console.log(resultat2);

// tsc 02-exo.ts && node 02-exo.js