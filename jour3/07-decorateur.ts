function decorateur(){

}

@decorateur() // modifier // exécuter une fonction qui va agir sur une class 
class A{

}

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