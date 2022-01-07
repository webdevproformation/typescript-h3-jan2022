// type de base :

// tuple (Python)
// tableau nombre items déterminés et typé

const tableau : Array<number> = [ 1 ,2,3,4, 6, 8] ;
const tableau2 : number[] = [1,2,3,4, 6, 8] ;
// pas de nombre d'éléments maximum ou minimum pour le tableau

// tuple
const adresse : [string, number, string] = ["75 rue de Paris" , 75000 , "Paris"];
// 3 valeurs : string / number / string

// enum 
// enum => type qui permet de stocker des constantes dans une variable 

// rôle des utilisateurs 
// rôle : admin / redacteur / anonyme

enum Role { // type qui contient 3 constantes 
    admin , redacteur , anonyme
}
// regrouper des constantes que vous allez stocker dans une type défini 
interface interfaceArticle {
    titre : string , contenu : string
}
function creerArticle ( data : interfaceArticle , role : Role ){ // typer 
    if(role == Role.admin || role == Role.redacteur){ // utiliser comme valeur 
        return "vous pouvez lire et rédiger des articles" ;
    }
    if(role == Role.anonyme){
        return "vous pouvez lire uniquement des articles" ;
    }
}
const resultat = creerArticle( {titre : "A" , contenu : "B"} , Role.admin ) // variable 
console.log(resultat); 
// cd jour2
// tsc 01-type-base.ts && node 01-type-base.js

// type enumeré sans valeur
enum Role2 { // type qui contient 3 constantes 
    admin , redacteur , anonyme
}
// constante Role2 qui a 3 propriétés (SANS valeur)
// utiliser Role2.admin => clé 

// énuméré avec valeur de type string 
enum Couleurs {
    color = "#000",
    background = "#fff",
    border = "#eee"
};

let info : Couleurs = Couleurs.background ;  

console.log(info) ; // "#fff",

enum Role3 { // type qui contient 3 constantes 
    admin = 0,
    redacteur = 1 , 
    anonyme = 2
}

console.log(Role3.admin);  // 0
console.log(Role3.anonyme);  // 2









