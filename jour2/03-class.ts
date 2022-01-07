export{};
// 03-class.ts

// en javascript de base 
// version ancienne - 1995
function A(prop1, prop2){
    this.prop1 = prop1
    this.prop2 = prop2
}
A.random = function(){ // ancienne méthode pour créer une méthode static 
    return Math.random();
}
A.prototype.method1 = function(){
    return this.prop1 ;
}
A.prototype.method2 = function(){
    const resultat = this.method1()
    console.log(resultat);
}

// ES6 (2015) => javascript de base 
class B {
    prop1;
    prop2; 
    constructor(prop1, prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }
    method1(){
        return this.prop1 ;
    }
    method2(){
        const resultat = this.method1()
        console.log(resultat);
    }
    static random (){ // static existe dans javascript de base 
        return Math.random(); 
    }
}

// typescript ajouter de nouveaux concepts (manquants)

// portée des variables et des méthodes 
// private / protected / public (par défaut)

class C {
    private prop1 : Array<number>; // typescript
    protected prop2  : boolean ;
    public prop3 : string;
    public constructor(prop1 : Array<number>, prop2 : boolean, prop3 : string){
        this.prop1 = prop1;
        this.prop2 = prop2 ;
        this.prop3 = prop3 ; 
    }
    private getProp1() {
        return this.prop1 ;
    }
    public static random(){
        return Math.random()
    }
}
// tsc 03-class.ts --noEmitOnError  && node 03-class.js

const c = new C([1], false , "b")

// console.log(c.getProp1()); 

abstract class D{
  method1(){
      console.log("je suis la méthode 1")
  }
  // méthode abstraite (QUE dans des class abstraite)
  // définir la signature nom / paramètre et les types
  // type de sortie
  abstract method2(largeur : number , hauteur : number) : string
}
// const d = new D() ne peut pas être instanciée
// pour une class abstraire => ne peut uniquement être hérité
class E extends D{
    // créer la méthode 2 en respectant la signature définie dans le parent
    method2(largeur: number, hauteur: number): string {
        return "je suis la méthode 2";
    }
}

const e = new E(); 

e.method1()

// class 100 abstraite => interface 

interface Forme{
    surface() : number,
    aire() : number
};// class abstraite à 100% / dont tous les membres sont abstraits

abstract class Forme2{
    abstract surface() : number
    abstract aire() : number
} // identique 

class Carre implements Forme{
    surface(): number {
        return 10   
    }
    aire(): number {
        return 20;
    }
}

// cas pratique : créer le fichier 04-exo.ts 

// créer une class abstraite Personnage 
// 2 propriétés abstraites : nom string / vie number
// 1 méthode abstraite : frapper () retouner number

// créer un class Guerrier hérité de Personnage
// créer un class Magicien hérité de Personnage

// ces deux class enfant disposent d'un constructeur qui permet d'initialiser 
// nom et le vie + force

// ces deux class enfant décrivent la méthode frapper = force * 10 (si guerrier)
// ces deux class enfant décrivent la méthode frapper = force * 15 (si magicien)





