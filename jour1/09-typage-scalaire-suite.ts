interface interfaceObj {
    a : number ,
    b : string ,
    c() : number ,  // signature de la méthode c
    d( largeur : number ) : void // signature de la fonction 
}

const obj : interfaceObj = {
    a : 2,
    b : "bonjour",
    c : function( ){ 
        return 10 ;
    },
    d( largeur : number ) {}
}

obj.c().toFixed(0) // très bonne documentation via l'autocomplétion présent dans Visual Studio Code ! 

interface interfaceFacultative {
    largeur : number ,
    unite : string ,
    information ?: string // la propriété information est facultative
}

const f1 : interfaceFacultative = { largeur : 2 , unite : "km" };
const f2 : interfaceFacultative = { largeur :30, unite : "cm" ,information : "taille d'un bureau" };


// créer le fichier 10-function.ts

