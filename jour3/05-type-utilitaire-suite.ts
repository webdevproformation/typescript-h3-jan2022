// https://www.typescriptlang.org/docs/handbook/utility-types.html
export {}; 

interface Voiture {
    marque ?: string,
    annee : number,
    autreProp : boolean
}
// Record<Keys, Type>
type Models = "BMW" | "Renault" | "Peugeot"; 

const voitures : Record<Models , Voiture> = {
    BMW : {annee : 2021 , autreProp : true , marque : "class A"},
    Renault : {annee : 2021 , autreProp : true},
    Peugeot : {annee : 2021 , autreProp : true},
}

// Pick<Type, Keys>
type maVoiture = Pick<Voiture , "marque" | "autreProp"> 

const monVehicule : maVoiture = { autreProp : false , marque : "BMW" }

// Omit<Type, Keys>

type Velo = Omit<Voiture , "marque">
const v : Velo = {annee : 2022 , autreProp : true}

// Exclude<UnionType, ExcludedMembers>

type Liste1 = "a" | "b" | "c" | "d" ;
type exclusion = "c" | "a";

type Locomotion = Exclude<Liste1 , exclusion> ;

function calcul () : string | null {
    return "a"
}

const resultat2 = calcul ();

type resultat = Exclude<typeof resultat2, null>
