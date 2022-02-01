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

// cas pratique :

// créer le fichier 06-exo.ts 

// dans ce fichier vous avez le type suivant :
/**
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

1 récupérer toutes les propriétés de Todo sauf createdAt
2 récupérer uniquement  les propriétés description et completed de Todo et les rendre facultatives

3 une fonction qui retourne soit string soit number soit null 
utiliser le type Utilitaire Exclude pour limiter le type de cette fonction uniquement que string et  number
*/
