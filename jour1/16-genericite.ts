// moyen de rendre flexible un système de typage 
// code qui est typer flexible 

function retournerPremierElement( parametre : Array<number|string | {id :number}> )  {
    return parametre[0]; 
}

retournerPremierElement([1,2,3,4,5]) ; /// 1

retournerPremierElement(["a", "b" , "c"]) ; // erreur number et non des chiffres

retournerPremierElement([{id : 1} , {id: 2} , {id: 3}]) ; // erreur number et non des chiffres

// concept de généricité 
// créer une fonction générique 

function retournerPremierElement2<T> (parametre : Array<T>) : T{
    return parametre[0];
}

// implicitement T => number
retournerPremierElement2([1,2,3]).toFixed()
// implicitement T => string
retournerPremierElement2(["a","b","c"]).toLowerCase()
// implicitement T => {id : number , nom : string}
retournerPremierElement2([{id: 1, nom : "Alain"}, {id : 2 , nom : "Béatrice"}]).nom.trim()

// explicitement dire la valeur T  est boolean
retournerPremierElement2<boolean>([true , false , false , false])

interface interfaceFruit {
    nom : string , couleur : number , prix : number
}

retournerPremierElement2<interfaceFruit>([{nom : "b" , couleur : 2 , prix : 1} , {nom : "c" , couleur : 1 , prix :0 }]).prix.toString()

// cas pratique créer le fichier 17-exo.ts
/** 
// ce fichier contient une fonction aggregate( )
// deux paramètres 
// tableau1 
// tableau2

// la fonction va concatener le tableau1 et le tableau2 
// retourner le résultat de la concaténation des deux tableaux 

// Utiliser cette fonction avec les valeurs suivantes 

//["a","b"] , ["c","d"]
//[1,2] , [3,4,5]
 */


