"use strict";
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var formulaire = e.target;
    var formData = new FormData(formulaire);
    var data = {};
    formData.forEach(function (el, name) {
        data[name] = el;
    });
    addLog(data);
    formulaire.reset();
});
function addLog(data) {
    var div = document.querySelector(".log");
    div.innerHTML += "<p>".concat(data.nom, " - ").concat(data.age, "</p>");
}
//# sourceMappingURL=script.js.map