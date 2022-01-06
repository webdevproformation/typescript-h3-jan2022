export {} ;

const data = [
    { id : 1 , status : true } , 
    { id : 2 , status : true } , 
    { id : 3 , status : false }
];

const filter = ( tableau ) => {
    return tableau.filter( element => element.status === false)
}

console.log(filter(data)); 

// tsc 04-exo.ts --removeComments --target es3
// tsc 04-exo.ts --removeComments

// traduit mon fichier exécuter 

// tsc 04-exo.ts --removeComments && node 04-exo.js // OK pas de soucis 

// tsc 04-exo.ts --removeComments --target es6 && node 04-exo.js
// ???? export {};
// SyntaxError: Unexpected token 'export'
// nodejs le mot clé export n'existe pas dans NodeJS ....
// module.exports // require() => manière NodeJS va gérer les fichiers découpés => système de module COMMONJS

// typescript 
// export  // import => manière de gérer des module sur Typescript mais aussi navigateur web => système de module Ecma Script (module ES)

// système de compabilité entre module COMMONJS et module ES 

// tsc 04-exo.ts --removeComments --target es6 --module umd  && node 04-exo.js
