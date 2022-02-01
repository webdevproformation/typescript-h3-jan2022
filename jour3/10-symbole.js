const a = [
    {FR : {nom : "france" , capitale : "Paris"}},
    {EN : {nom : "angleterre" , capitale : "Londres"}}
]

for(let [, obj] of Object.entries(a)){
    const [codePays] = Object.keys(obj);
    //console.log(codePays);
    console.log(obj[codePays].capitale)
}

/* console.log(a[0]); */

/* a.FR.capitale
a.EN.capitale */

const jours = ["lundi", "mardi", "mercredi"];

const deux = jours[1] ;

const [premier, deuxieme, troisieme] = jours ;
/* var premier = jours[0]
var deuxieme = jours[1]
var troisieme = jours[2] */

const [ , deuxiemeJour] = jours ;
console.log(deuxiemeJour);