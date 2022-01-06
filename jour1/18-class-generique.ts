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

