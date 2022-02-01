"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function readonly(target, key, descriptor) {
    console.log(target, key, descriptor);
    if (key) {
        key.writable = false;
        return descriptor;
    }
}
var A = /** @class */ (function () {
    function A() {
        this.titre = "hello";
    }
    __decorate([
        readonly
    ], A.prototype, "titre", void 0);
    return A;
}());
// tsc 09-decorateur-suite.ts --experimentalDecorators --target es5 && node  09-decorateur-suite.js
var a = new A();
a.titre = "coucou";
console.log(a.titre);
// fonction qui modifie une class 
// cas pratique 
// créer un nouveau dossier jour3-tp 
// index.html 
// zone => formulaire avec un seul champ => saisir un texte + un bouton de soumission
// zone liste de résultat => https://restcountries.com/
/*    <article>
       <img drapeau>
       <h2>nom pays</h2>
       <p>nom de la devise </p>
   </article>
*/
// https://restcountries.com/v3.1/all
// lorsque vous remplissez le formulaire rechercher dans tous les pages ceux dont le nom du pays contient le texte saisit dans la zone de recherche 
// utiliser typescript pour réaliser le code et compiler votre fichier .ts en js via le compilateur tsc 
