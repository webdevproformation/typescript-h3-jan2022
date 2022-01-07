export function addLog(data) {
    const div = document.querySelector(".log");
    div.innerHTML += `<p>
            ${data.nom} - ${data.age} 
             ${(data === null || data === void 0 ? void 0 : data.sujet) ? " - " + (data === null || data === void 0 ? void 0 : data.sujet) : ""} ${(data === null || data === void 0 ? void 0 : data.commentaire) ? " - " + (data === null || data === void 0 ? void 0 : data.commentaire) : ""}</p>`;
}
export function verif(data) {
    let resultat = true;
    if (data.age.toString() == "" || data.age < 0 || data.age > 100) {
        resultat = false;
    }
    if (data.nom.length < 5 || data.nom.length > 250) {
        resultat = false;
    }
    if (((data === null || data === void 0 ? void 0 : data.sujet) && data.sujet.length < 5) || ((data === null || data === void 0 ? void 0 : data.sujet) && data.sujet.length > 250)) {
        return false;
    }
    if (((data === null || data === void 0 ? void 0 : data.commentaire) && data.commentaire.length < 5) || ((data === null || data === void 0 ? void 0 : data.commentaire) && data.commentaire.length > 250)) {
        return false;
    }
    return resultat;
}
//# sourceMappingURL=lib.js.map