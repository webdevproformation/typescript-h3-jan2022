export function addLog<T extends interfaceData>( data : T ) : void{
    const div = document.querySelector(".log") as HTMLDivElement ;
    div.innerHTML += `<p>
            ${data.nom} - ${data.age} 
             ${(data?.sujet) ? " - "+ data?.sujet : ""} ${(data?.commentaire) ? " - "+ data?.commentaire : ""}</p>`;
}

export function verif<T extends interfaceData >(data :T) : boolean{
    let resultat = true ; 

    if(data.age.toString() == "" || data.age < 0 || data.age >100){
        resultat = false ;
    }
    if(data.nom.length < 5 || data.nom.length > 250){
        resultat = false ;
    }

    if((data?.sujet && data.sujet.length < 5) || ( data?.sujet && data.sujet.length > 250)){
        return false;
    }

    if((data?.commentaire && data.commentaire.length < 5) || ( data?.commentaire && data.commentaire.length > 250)){
        return false;
    }
    return resultat ;
}

export interface interfaceData{
    nom : string , age : number , sujet ?: string , commentaire ?: string  
}