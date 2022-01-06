export {} ;

// typage par déduction / inférence 
// type script 
const a = "bonjour" ; // créer une variable ET affecter une string 
// automatiquement typescript va vous proposer TOUTES les méthodes liées au type string 
a.toUpperCase() ; //  proposer automatique les bonnes prop / méthodes sur la variable 

// a.toFixed()

const b = 12 ;
b.toFixed(2)

// typage par annotation 

const c : string = "12" ; // permet de préciser CLAIREMENT le type de la valeur stockable dans la variable c  

// typage primitif 
// valeurs primitives 

const d : number = -12.2 ;

const e : boolean = false  ;
const f : boolean = true  ;
const g : boolean = 12 > 5  ;

let h : null ; // variable contient rien
let i : undefined ;   // créer la variable mais n'a pas de type défini
let j : any ; // manière dont fonction javascript lorsqu'il crée des variables
// any => variable peut prendre n'importe quel type à n'importe quelle moment 

j.toUpperCase()
j.toFixed()

let l : unknown ; // variable qui existe dont on définira par la suite le type 
// comme any MAIS en plus restrictif 
// types primitifs (type de bases)

// 
// types avancés Array et Object function ....






