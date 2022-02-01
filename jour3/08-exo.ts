function execution( target :any ){
    const t = new target();
    console.log( t.information());
}

@execution
class Etudiant{
    information(){
        return 20 ;
    }
}
// décorateur
// tsc 08-exo.ts --experimentalDecorators && node 08-exo.js

// 09-decorateur-suite.ts