export {};

let a:number ;
a = 2; // OK

let b:any; // variable de type any => changer sa valeur sans problème !! 
b = 20;
b = false;
b = "du texte";

let c ;// aucune annotation => typescript let c : any; 
c = 2;
c = "autre texte"

let d = false ; // affectation boolean let d : boolean = false ;
d = true ;
d = "texte final" ; // erreur qui est déclenchée

// tsc 06-exo.ts
// même si vous avez une erreur tsc va quand même traduire .ts => .js par défaut 

// tsc 06-exo.ts --noEmitOnError 
// ne pas gérer le fichier .js si il y a une erreur dans le fichier .ts 