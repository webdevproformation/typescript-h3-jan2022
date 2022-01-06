// string / number / boolean / undefined / null / any / unknown 
// 5 types primitifs 

// tableau et object 
// types scalaires

// tableau qui contient des chiffres 

const notes : number[] = [1,2,3,4];  // première manière d'écrire 

const jours : string[] = ["lundi" , "mardi" , "mercredi" ];
const jours2 : Array<string> = ["lundi" , "mardi" , "mercredi"];

// tableau qui contient chiffre et lettre 
const chiffreLettres : (number|string)[] = [1,"a", 2 , "b"]; // | pipe Union
const chiffreLettres2 : Array<number|string> = [1,"a", 2 , "b"];

const complexe : Array<Array<number>>= [[1,2] , [3,4]] ; 
const complexe2 : number[][]= [[1,2] , [3,4]] ; 

// object 
// Object => Objet littéral

let etudiant : Object = { // pas contraignant
    nom : "Alain",
    age : 12 
}

etudiant = 2;

let etudiant2 : {} = {// pas contraignant
    nom : "Alain",
    age : 12 
}
etudiant2 = []

let etudiant3 : { nom : string , age : number } = {
    nom : "Alain",
    age : 12 
}

etudiant3 = {
    age : 33,
    nom : ""
}; 

// pour typer les objets et éviter d'avoir à écrire la définition 

// créer nous même un nouveau type 
type Etudiant = { // alias d'annotation 
    nom : string , age : number
}
let etudiant4 : Etudiant = { nom : "AAA" , age : 12345 }; 
let etudiant5 : Etudiant = { nom : "BBB" , age : 12345 }; 

// interface 
interface interfaceEtudiant {
    nom : string , age : number
}
let etudiant6 : interfaceEtudiant = {nom : "CCC" , age : 44} ; 

// créer une class
class EtudiantClass {
    constructor( public nom :string , public age:number ){}
}
let etudiant7 : EtudiantClass = {age : 30 , nom : "charles "}


// la différence créer type et créer une interface 
// même chose 
// la différence 
// type une fois qu'il est créé => plus possible de le modifier 
// interface de la crée et de la modifier la suite  

type Toto = {
    largeur : number
}
interface Tata {
    largeur : number
}
interface Tata2 extends Tata {
    hauteur : number 
}
const rectangle : Tata2 = { largeur : 12 , hauteur : 30 }; 

// utiliser des interfaces / type / class avec des tableaux => collections

const formation : Array<{id : number , nom : string}> = [ 
    {id : 1 , nom : "js" },
    {id : 2 , nom : "angular" },
    {id : 3 , nom : "react" },
]
type Formation = {id : number , nom : string}

const formation2 : Array<Formation> = [ 
    {id : 1 , nom : "js" },
    {id : 2 , nom : "angular" },
    {id : 3 , nom : "react" },
]

interface interfaceFormation { id : number , nom : string }

const formation3 : Array<interfaceFormation> = [ 
    {id : 1 , nom : "js" },
    {id : 2 , nom : "angular" },
    {id : 3 , nom : "react" },
]








