interface interfaceData{
    nom : string , age : number
}
const form = document.querySelector("form") as HTMLFormElement
form.addEventListener( "submit" , function(e : Event ){
    e.preventDefault(); 
    const formulaire = e.target as HTMLFormElement ; 
    const formData =  new FormData( formulaire )
    let data  : any = {} ; 
    formData.forEach( function (el, name) {
        data[name] = el; 
    } );
    addLog( data as interfaceData )
    formulaire.reset();
} )
function addLog( data : interfaceData ){
    const div = document.querySelector(".log") as HTMLDivElement ;
    div.innerHTML += `<p>${data.nom} - ${data.age}</p>`;
}