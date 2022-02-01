"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function decorateur(target) {
    var a = new target();
    a.method();
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.method = function () {
        console.log("je suis une méthode de la class A");
    };
    A = __decorate([
        decorateur // modifier // exécuter une fonction qui va agir sur une class 
    ], A);
    return A;
}());
// tsc 07-decorateur.ts --experimentalDecorators && node 07-decorateur.js
// Angular => Composant 
/* import Component from "@angular/core";

@Component({
    selector : "toto",
    template : "<h1></h1>"
})
class ComposantComponent{

} */
// dans le fichier tsconfig.json => "experimentalDecorators": true
// décorer plusieurs choses dans une class 
/* @Component({
    selector : "toto",
    template : "<h1></h1>"
})
class ComposantComponent{
    @Input() titre : string

    @Output() event : new EventEmetter<string>()

}  */
function Decorateur2(option) {
    return function (target) {
        console.log(option, target);
        var t = new target();
        t.method(option.template);
    };
}
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.method = function (html) {
        console.log(html);
    };
    B = __decorate([
        Decorateur2({
            template: "<h1>je suis le texte</h1>",
            selector: "root"
        })
    ], B);
    return B;
}());
