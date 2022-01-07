"use strict";
exports.__esModule = true;
// 03-class.ts
// en javascript de base 
// version ancienne - 1995
function A(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
}
A.random = function () {
    return Math.random();
};
A.prototype.method1 = function () {
    return this.prop1;
};
A.prototype.method2 = function () {
    var resultat = this.method1();
    console.log(resultat);
};
// ES6 (2015) => javascript de base 
var B = /** @class */ (function () {
    function B(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    B.prototype.method1 = function () {
        return this.prop1;
    };
    B.prototype.method2 = function () {
        var resultat = this.method1();
        console.log(resultat);
    };
    B.random = function () {
        return Math.random();
    };
    return B;
}());
// typescript ajouter de nouveaux concepts (manquants)
// portée des variables et des méthodes 
// private / protected / public (par défaut)
var C = /** @class */ (function () {
    function C(prop1, prop2, prop3) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }
    C.prototype.getProp1 = function () {
        return this.prop1;
    };
    C.random = function () {
        return Math.random();
    };
    return C;
}());
// tsc 03-class.ts && node 03-class.js
var c = new C([1], false, "b");
console.log(c.getProp1());
