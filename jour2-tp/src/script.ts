import {addLog , verif , interfaceData} from "./lib.js" 
// pour pouvoir exécuter ton ts => js dans navigateur => .js
const forms = document.querySelectorAll("form") 
forms.forEach( form => {
    form.addEventListener( "submit" , function(e : Event ){
        e.preventDefault(); 
        const formulaire = e.target as HTMLFormElement ; 
        const formData =  new FormData( formulaire );
        let data  : any = {} ; 
        formData.forEach( function (value, name) {
            data[name] = value; 
        } );
       // console.log(data)
        if(verif(data)){
            addLog( data as interfaceData )
            formulaire.reset();
        }
    } )
}) 

// cas pratique :
// ajouter les vérifications nécessaires avant d'ajouter les informations dans la page web
// vérifier que les deux champs ne sont pas vides et age > 0 et < 100
// verifier que nom contient au moins 5 caractères et au plus 250

// cas pratique : créer un nouveau dossier 

// jour2-tp2
// index.html 
// form > input de type text / checkbox bouton submit 
// cliquer pour soumettre ajouter en dessous du formulaire 
// libellé / status (coché => realisé / non coché => en attente )
// réaliser toute la logique via typescript (utiliser le fichier tsconfig et le système de module es6 pour organiser votre code )
