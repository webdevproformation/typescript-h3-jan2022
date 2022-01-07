import { addLog, verif } from "./lib.js";
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formulaire = e.target;
    const formData = new FormData(formulaire);
    let data = {};
    formData.forEach(function (value, name) {
        data[name] = value;
    });
    if (verif(data)) {
        addLog(data);
        formulaire.reset();
    }
});
//# sourceMappingURL=script.js.map