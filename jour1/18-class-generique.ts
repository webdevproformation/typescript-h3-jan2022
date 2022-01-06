export {};

// class générique 
class Forme<T> {
    prop : T ; 
    constructor(prop : T){
        this.prop = prop
    }
    getProp() : T{
        return this.prop
    }
}

const f = new Forme({id: 1 , largeur : 20})
f.getProp().id ;

// créer un nouveau fichier 19-exo.ts 

// class Produit et qui contient 2 propriétés générique dans son constructeur Stock / Prix 

// créer cette class et créer les getter pour récupérer les valeurs de ces deux propriété de la class 




