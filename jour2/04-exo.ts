export {}; 
abstract class Personnage{
    abstract nom : string ;
    abstract vie : number ;
    abstract frapper( adversaire : Personnage) : number ; 
    getVie(){
        return this.vie;
    }

    setVie(valeur){
        this.vie += valeur ;   
    }
}

class Guerrier extends Personnage{
    nom ;
    vie ;
    force ;
    constructor(nom , vie , force){
      super();
      this.nom = nom ;
      this.vie = vie ;
      this.force = force ;  
    }
    frapper( adversaire : Personnage ): number {
        adversaire.setVie(- this.force * 10);
        return this.force * 10 ;
    }
}

class Magicien extends Personnage{
    nom ; // force les développeurs utilisent la class abstraite 
    vie ;
    force ;
    constructor(nom , vie , force){
      super();
      this.nom = nom ;
      this.vie = vie ;
      this.force = force ;  
    }
    frapper( adversaire : Personnage ): number {
        adversaire.setVie(- this.force * 15);
        return this.force * 15 ;
    }
}
const guerrier1 = new Guerrier("A" , 200, 10)
const magicien1 = new Magicien("B" , 500, 5)

guerrier1.frapper(magicien1); // 400
magicien1.frapper(guerrier1); //
guerrier1.frapper(magicien1); // 300
guerrier1.frapper(magicien1); // 200

console.log(magicien1.getVie()); // 200
console.log(guerrier1.getVie()); // 125 

// tsc 04-exo.ts && node 04-exo.js


