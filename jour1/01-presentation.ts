// javascript => html => script
// créer un fichier .js => <script src="fichier.js"></script> 

// typescript => créer des fichiers .ts 

// langage => sur ensemble / langage spécialisé / sur set 
// sass => css 

// langage qui connait l'ensemble des mots clés du langage javascript 

// si vous créez un fichier .ts ET que écrivez dedans du javascript classique => dom / for if function () => {} while ...

// vous écrivez du typescript VALIDE AUTOMATIQUEMENT

// en plus des mots clés javascript Typescript instroduit des concepts ABSENT du langage javascript => le TYPAGE 

// javascript langage à typage faible / typage dynamique 

let a ; 
a = "bonjour" ; // a => type string 
a = false ; // a => type boolean
a = function(){ } // a object de de type fonction 

// pour un petit projet => pas de soucis (parfait)
// pour des projets importants pauser de gros problème => code n'est pas prévisible 
// difficilement par partageable ! 

let b : string ; // annotation 
b = "bonjour" ;
// b = 12 ; // aide au moment de la saisi (visual studio)
// => relire votre code AVANT exécuté et compilé (réduire les risques d'erreurs)

// class => en javascript 

// es6 (2015) => class 

class A{
    largeur;
    hauteur;
    constructor( largeur , hauteur ){
        this.largeur = largeur ;
        this.hauteur = hauteur ;
    }
}

// en POO classique => encapsulation protéger via private / protected 
// concepts en plus sur les class
class B{
    protected largeur;
    private hauteur;
    public constructor( largeur , hauteur ){
        this.largeur = largeur ;
        this.hauteur = hauteur ;
    }
}

// sur ensemble => écrire du js classique ET ajouter des mots clés en + 

// 02-transtypage.ts












