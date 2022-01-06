// premier fichier.ts 
export {} ; 

// écrire du javascript classique !! 
// version 6 de javascript 
const calcul = (a , b) => {
    console.log( a * b ); 
}
calcul(1, 4);
calcul(5, 2); 
// cd jour1
// tsc 03-hello.ts // génère un fichier 03-hello.js

// tsc 03-hello.ts 
// traduire le fichier .ts dans la version la plus ancienne de javascript version 3 de javascript ( 1995 )
// const => var 
// () => {}   => function(){}

// en js classique les variables sont globales quelquesoit le fichier 
// .ts => fichier source (beaucoup plus documenté / vérification avant exécution / éviter des bugs avant exécution) dans lequel tu vas travaillé 
// .js => exécution ( jamais mettre les mains dedans )

// .scss  
// .css 
// tsc 03-hello.ts

// tsc 03-hello.ts --removeComments

// ES6 (2015)
class A{
 i ;
 j ;
 constructor(i , j){
    this.i = i;
    this.j = j ;
 }
 calcul(){
     return this.i * this.j ; 
 }
}
const test1 = new A(1,2);
test1.calcul();

// ------------------

function B(i , j){
    this.i = i ;
    this.j = j ;
}
B.prototype.calcul = function(){
    return this.i * this.j ; 
}

const test2 = new B(2,3);
test2.calcul();
// nouvelle manière d'écrire du javascript => traduire dans une ancienne version de javascript (ES3 par défaut)

// tsc 03-hello.ts --removeComments
// tsc 03-hello.ts --removeComments --target es3
// typescript site internet officiel => 
// typescriptlang.com
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
// https://www.typescriptlang.org/tsconfig/#target

// cas pratique : créer dans le dossier jour1 
// un nouveau fichier 04-exo.ts 
/* contient une variable qui contient la valeur suivante = un tableau [
    { id : 1 , status : true } , 
    {  id : 2 , status : true } , 
    { id : 3 , status : false }
]*/

// créer une fonction qui permet de filtrer l'ensemble des valeurs false du tableau => fonction permet d'enlever les valeurs pour le status = true

// transformer ce fichier .ts => .js version es3 sans commentaire



