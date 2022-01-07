import {addLog , verif , interfaceData} from "./lib.js" 
// pour pouvoir exécuter ton ts => js dans navigateur => .js

const form = document.querySelector("form") as HTMLFormElement
form.addEventListener( "submit" , function(e : Event ){
    e.preventDefault(); 
    const formulaire = e.target as HTMLFormElement ; 
    const formData =  new FormData( formulaire );
    let data  : any = {} ; 
    formData.forEach( function (value, name) {
        data[name] = value; 
    } );
    //console.log(verif(data))
    if(verif(data)){
        addLog( data as interfaceData )
        formulaire.reset();
    }
} )



// cas pratique :
// ajouter les vérifications nécessaires avant d'ajouter les informations dans la page web
// vérifier que les deux champs ne sont pas vides et age > 0 et < 100
// verifier que nom contient au moins 5 caractères et au plus 250

