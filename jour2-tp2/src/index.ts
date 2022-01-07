interface interfaceData{
    label : string , status ?: string
}
(document.querySelector("form") as HTMLFormElement).addEventListener("submit" , function(e :Event){
    e.preventDefault();
    const data = new FormData(this)
    const values :any = {}
    for(let [nom, valeur] of data.entries()){
        values[nom] = valeur; 
    }
    // console.log(values); 
    add(values)
    this.reset(); 
})

function add(data :interfaceData){
    (document.querySelector(".resultat") as HTMLDivElement).innerHTML += `
        <p>${data.label} - ${(data?.status) ? "finalisé" : "en attente"}</p>
    `;
}