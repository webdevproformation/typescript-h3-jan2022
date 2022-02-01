export {};

function readonly (target : any, key : any , descriptor ?: any){
    console.log(target , key ,descriptor );
    if(descriptor){
        descriptor.writable = false ; 
        return descriptor; 
    }
    return {
        get: function get() {
          // Return the stored value for the instance.
        },
        set: function set() {
          // Check if it is the first time to set value.
          // If true store the value, else console.error.
        }
    };  
}

class A{
    @readonly 
    public  titre : string = "hello";
}

// tsc 09-decorateur-suite.ts --experimentalDecorators --target es5 && node  09-decorateur-suite.js

const a = new A();

a.titre = "coucou";

console.log(a.titre); 


// fonction qui modifie une class 


// cas pratique 
//créer un nouveau dossier jour3-tp 
// index.html 

// zone => formulaire avec un seul champ => saisir un texte + un bouton de soumission
// zone liste de résultat => https://restcountries.com/

// https://restcountries.com/v3.1/all


// lorsque vous remplissez le formulaire rechercher dans tous les pages ceux dont le nom du pays contient le texte saisit dans la zone de recherche 

// utiliser typescript pour réaliser le code et compiler votre fichier .ts en js via le compilateur tsc 


