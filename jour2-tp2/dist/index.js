"use strict";
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
    const values = {};
    for (let [nom, valeur] of data.entries()) {
        values[nom] = valeur;
    }
    add(values);
    this.reset();
});
function add(data) {
    document.querySelector(".resultat").innerHTML += `
        <p>${data.label} - ${(data === null || data === void 0 ? void 0 : data.status) ? "finalisé" : "en attente"}</p>
    `;
}
//# sourceMappingURL=index.js.map