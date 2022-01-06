// 10-function.ts

function calcul ( largeur :number , hauteur : number ) : string {
    return (largeur * hauteur).toString() ; 
}

// fonction fléchée 
const division = (a :number , b :number) : string => {
    return "" + a / b ;
}

// fonction ne retourne rien ne contient pas le mot clé return 

const afficher = (text : any) : void => {
    console.log(text)
}

// afficher("bonjour")

interface interfacePoint {
    x : number , y : number
}

const deplacer = ( 
        point : interfacePoint , 
        deplacementX : number , 
        deplacementY : number )  => {
            return {
                x : point.x + deplacementX,
                y : point.y + deplacementY
            }
        }

console.log(deplacer({x: 15 , y : 0} , 3 , -5).x);
// tsc 10-function.ts && node 10-function.js

// cas pratique créer le fichier 11-exo.ts 

// créer une fonction dessiner 
// prend 1 paramètre objet de type forme 
// contient 4 propriétés  
/* - couleur : string / 
- background string / 
- position chiffre / 
- fontFamily string et facultatif */

// retourner la chaine de caractère suivante 

//j'utilise la couleur sur un fond de background à la position avec un police de caractère fontFamily

// utiliser cette fonction avec les valeurs suivantes 

/* {couleur : "#000" , background : "#fff" , position : 12};
{couleur : "#eee" , background : "#aaa" , position : 1 , fontFamily : "Arial"};
{couleur : "#999" , background : "#123" , position : 120};
 */

// afficher les résultats dans le terminal de Visual Studio Code 
