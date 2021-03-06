// permet de préciser le type d'une variable après l'avoir déterminer 

function genererArticle () : Object{
    return {
        id : 1,
        titre : "article 1",
        contenu : "lorem ipsum"
    }
}

interface interfaceArticle {
    id : number , titre : string , contenu : string
}

// as permet un assertion de type en utilisant le mot clé as
const article = genererArticle() as interfaceArticle // affiner le type Object => interface Article

article.titre

//const article2 : interfaceArticle = genererArticle();
// ça ne fonctionne pas 

const article3 = <interfaceArticle>genererArticle() ;

article3.contenu


function calcul(prix : number ) : number | string {
    if(prix > 0 ){
        return prix ;
    }
    return "" + prix;
} 

const re = calcul( 10 ) as number ; 
const re2 = <string>calcul( -10 )  ; // assertion de type ! 

const input = document.querySelector("input")

input.value

const input2 = document.querySelector(".form-input") as HTMLInputElement

input2.value

const input3 = <HTMLInputElement>document.querySelector(".form-input") 

input3.value; 

// repréciser le type d'une variable avec l'avoir déclaré => Object => { id : number }
// repréciser le type d'une variable avec l'avoir déclaré => Element => HTMLInputElement
// repréciser le type d'une variable avec l'avoir déclaré => number | string => string

// créer le fichier 15-exo.ts 
// fonction get qui peut retourner soit un string soit objet de type Etudiant {id : number , nom : string }

// cette fonction contient un paramètre de type string 
// si le nombre de caractère de la fonction est = 0 => retourne string sinon ça retourne l'objet étudiant

// utiliser cette fonction avec les valeurs suivantes : 
// get("")
// get("Alain")

// mettre en majuscule le prénom de l'étudiant dans le deux cas 




