export function addLog(data) {
    const div = document.querySelector(".log");
    div.innerHTML += `<p>${data.nom} - ${data.age}</p>`;
}
export function verif(data) {
    let resultat = true;
    if (data.age.toString() == "" || data.age < 0 || data.age > 100) {
        resultat = false;
    }
    if (data.nom.length < 5 || data.nom.length > 250) {
        resultat = false;
    }
    return resultat;
}
//# sourceMappingURL=lib.js.map