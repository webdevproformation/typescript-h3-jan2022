export function addLog<T extends interfaceData>( data : T ) : void{
    const div = document.querySelector(".log") as HTMLDivElement ;
    div.innerHTML += `<p>${data.nom} - ${data.age}</p>`;
}

export function verif<T extends interfaceData >(data :T) : boolean{
    let resultat = true ; 

    if(data.age.toString() == "" || data.age < 0 || data.age >100){
        resultat = false ;
    }
    if(data.nom.length < 5 || data.nom.length > 250){
        resultat = false ;
    }
    return resultat ;
}

export interface interfaceData{
    nom : string , age : number
}