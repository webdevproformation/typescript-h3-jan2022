export {}
type Etudiant = {id : number , nom : string }
function get(nom : string) : string | Etudiant {
    if(nom.length === 0 ){
        return nom;
    }
    return {
        id : 1 ,
        nom : nom
    }
}
console.log((get("") as string).toUpperCase());
console.log((<string>get("") ).toUpperCase());

(get("Alain") as Etudiant).nom.toUpperCase();
(<Etudiant>get("Alain") ).nom.toUpperCase();

// 16-genericite.ts