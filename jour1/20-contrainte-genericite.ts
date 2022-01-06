
function isAdmin<T extends {status : boolean}>( liste : Array<T> ){
    return liste.filter( el => el.status )
}

// le type que vous allez passer au moment de l'exécution de la fonction doit contenir obligatoirement une propriété status qui est de type boolean

//isAdmin([{id : 1 ,nom: "alain"} ,{id : 2 , nom: "alain"} ])
// erreur 

isAdmin([{id : 1 ,status: true} ,{id : 2 , status: false} ])
isAdmin([{id : 1 , nom : "A",status: true} ,{id : 2, nom : "B" , status: false} ])
