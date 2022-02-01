export {};

interface Voiture2 {
    marque ?: string,
    annee : number,
    autreProp : boolean
}

type VoitureProp = keyof Voiture2 ;

type Vehicule = Partial<Voiture2>; 

type VehiculeObligatoire = Required<Voiture2>;