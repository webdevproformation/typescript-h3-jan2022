export {} ;

const liste1 : string = "pêche poire ananas";
const liste2 : Array<string>= ["pêche" , "poire", "ananas"];

const liste3 : Array<string|number>= ["pêche", 4, "poire", 3, "ananas" , 2];

interface interfaceListe {
    items : Array<number|string>,
    budget : number ,
    unite : string
}

const liste4 : interfaceListe = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

interface interfaceProduit {
    id : number , nom : string , quantite : number
}
type ListeProduit = Array<interfaceProduit> ;

const liste5 : ListeProduit = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

// tsc 08-exo.ts