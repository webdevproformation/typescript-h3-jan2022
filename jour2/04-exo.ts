export {}; 
abstract class Personnage{
    nom : string ;
    vie : number ;
    force : number;
    abstract frapper( adversaire : Personnage) : number ; 
    constructor(nom , vie , force){
      this.nom = nom ;
      this.vie = vie ;
      this.force = force ;
    }
    getVie(){
        return this.vie;
    }
    setVie(valeur){
        this.vie += valeur ;   
    }
}

class Guerrier extends Personnage{
    frapper( adversaire : Personnage ): number {
        adversaire.setVie(- this.force * 10);
        return this.force * 10 ;
    }
}

class Magicien extends Personnage{
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

// fichier tsconfig.json
