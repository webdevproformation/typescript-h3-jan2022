
interface Chiffre{
    x : number ,
    y : number
}

// transforme la fonction javascript en une fonction générique 
// au moment de l'exécution de la fonction QUE l'on va déterminer le type du paramètre
function fonction1<TypeParam> ( a : TypeParam ){
    return a
}

fonction1( { x : 1 , y : 1 } ) // typage par inférence 
fonction1<Chiffre>( { x : 1 , y : 1 } ) // ajouter une annotation au moment de l'exécution de la fonction 

fonction1 ( { z : 1, d : 2}); 

// Type Utilitaire => fonctions qui l'on va utiliser COMME des génériques 
// créer des types à partir d'un autre type 

interface Etudiant  {
    nom : string ,
    age : number
    niveau : number
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
// Partial 
// type Master = Partial<Etudiant> ;

// parcourir chaque propriété de l'interface et la rend facultative

function b (id : number) : string | null {
    if( id > 0) return "";
    return null ;
}

// si retourner ... | null => !
// si retourner ... | undefined => ?

interface Voiture {
    marque ?: string,
    annee : number
}

const voiture : Voiture= {
    annee : 2021
}

if(typeof voiture.marque != undefined){
    console.log(voiture.marque)
}else {
    console.log("pas de marque ???")
}

console.log(voiture.marque)

// tsc 03-generic.ts && node 03-generic.js
// ts-node 03-generic.ts
// npm install -g ts-node
// tsc --init

interface Voiture2 {
    marque ?: string,
    annee : number,
    autreProp : boolean
}

type Vehicule = Partial<Voiture2>

// type Partial<T> = { [P in keyof T]?: T[P]; }

interface ObjInfinie{
    [ key : string ] : any ; // interface qui a un nombre de propriété infinie 
}

const animation : ObjInfinie = { 
    prop1 : "slide",
    prop2 : "1000ms",
    delay : "1000ms",
    color : 100,
    "0" : 0
}

interface ObjInfinieG<T>{ // interface qui a un nombre de propriété infinie générique (définir le type de T au moment de on utilisation)
    [ key : string ] : T ;
} 

const diaporama : ObjInfinieG<number> = {
    prop1 : 10,
    prop2 : 20,
    prop3 : 30
}

const diaporama2 : ObjInfinieG<Array<number> | string> = {
    prop1 : [10],
    prop2 : "hello",
    prop3 : [30]
}

const toto1 = {
    age : 10
}

toto1["taille"] = 20


const fourniture  = {
    nom : "Papier",
    format : "A4",
    prix : 10
} 

// typeof 

type interfaceFourniture = Partial<typeof fourniture>


type interfacePropFourniture = keyof interfaceFourniture ; 
// "nom" | "format" | "prix"

// permet de récupérer les props d'une interface 



