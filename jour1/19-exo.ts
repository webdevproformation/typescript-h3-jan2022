export class Produit<Stock, Prix> {
    s : Stock;
    p : Prix ;
    constructor( s : Stock , p : Prix ){
        this.s = s;
        this.p = p  ;
    }
    getS() : Stock{
        return this.s; 
    }
    getP() : Prix{
        return this.p;
    }
}

const p1 = new Produit({id : 1 , qte : 10 , nom : "Produit 1"} , {id : 1 , prix : 20})
p1.getS().nom

interface interfacePrix {
    id : number , prix : number
}

const p2 = new Produit<number , interfacePrix>(20 , {id : 1, prix : 3}); 

p2.getS()
p2.getP().prix ; 

// 20-contrainte-genericite.ts
