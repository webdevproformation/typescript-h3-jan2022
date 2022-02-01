// jour3 
// créer le fichier 01-narrowing.ts 

function calcul (id : number) : string | number {
    if(id > 0){
        return "Alain" ; 
    }
    return 0;
}

const resultat = calcul( 0 );

// narrowing => réduire 

// assertion de type => au moment de l'exécution de la fonction 
const resultat2 = calcul(20) as number ; // stope de faire de verif 
// le dev sait mieux



const resultat3 = calcul(0) ; 

// vérifier que la variable est de typeof == ""
if(typeof resultat3 == "string"){ // type Guard 
    resultat3.toLowerCase()
}else {
    resultat3.toFixed()
}

let a : any ; // supprimer vérification des types par typescript 


interface Etudiant {
    nom : string
}

interface Formateur{
    nom : string ,
    role : string
}

function getPerson(id : number) : Etudiant | Formateur {
    if(id == 1) return { nom : "etudiant" }
    return {nom : "formateur" , role : "admin"}
}


const person = getPerson(1) as Etudiant

const person2 = getPerson(2)

if("role" in person2){ // type Guard 
    person2
}else{
    person2
}

class A{}

class B{}

function getInfo (i : number) : A | B{
    if(i == 0){
        return new A()
    }
    return new B()
}

const test = getInfo(0) as B ;

if(test instanceof A){
    test
}else {
    test
}

const balise = document.querySelector(".hello") as HTMLButtonElement ;

const balise2 = document.querySelector(".hello");

if(balise2 instanceof HTMLButtonElement){
     balise2
}   



const toto = "bonjour"; // const toto = new String("bonjour")

const titi = String("titi")
const tata = String("tata")

function T(truc = 0){
    this.truc = truc ;
}

const t = T()
const t1 = new T()