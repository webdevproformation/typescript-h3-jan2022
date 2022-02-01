export {}; 

function decorateur( target : any){
    const a = new target()
    a.method (); 
}

@decorateur // modifier // exécuter une fonction qui va agir sur une class 
class A{
    method (){
        console.log("je suis une méthode de la class A");
    }
}
// tsc 07-decorateur.ts --experimentalDecorators && node 07-decorateur.js

// Angular => Composant 

/* import Component from "@angular/core";

@Component({
    selector : "toto",
    template : "<h1></h1>"
})
class ComposantComponent{

} */

// dans le fichier tsconfig.json => "experimentalDecorators": true

// décorer plusieurs choses dans une class 


/* @Component({
    selector : "toto",
    template : "<h1></h1>"
})
class ComposantComponent{
    @Input() titre : string

    @Output() event : new EventEmetter<string>()

}  */


function Decorateur2(option: any){
    return function (target : any){
        console.log(option , target)
        const t = new target()
        t.method(option.template)
    }
}

@Decorateur2({
    template : "<h1>je suis le texte</h1>",
    selector : "root"
})
class B{
    method (html : string){
        console.log(html)
    }
}

// concurrent extends 
// factory 

// cas pratique créer le fichier 08-exo.ts 

// créer une fonction décoratrice qui permet de exécuter une class Etudiant

// une fois que cette class est exécutée via la fonction décoratrice =>
// utiliser une méthode de cette class qui s'appelle information et qui retourne le chiffre 20

