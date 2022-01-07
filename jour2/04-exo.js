"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Personnage = /** @class */ (function () {
    function Personnage() {
    }
    Personnage.prototype.getVie = function () {
        return this.vie;
    };
    Personnage.prototype.setVie = function (valeur) {
        this.vie += valeur;
    };
    return Personnage;
}());
var Guerrier = /** @class */ (function (_super) {
    __extends(Guerrier, _super);
    function Guerrier(nom, vie, force) {
        var _this = _super.call(this) || this;
        _this.nom = nom;
        _this.vie = vie;
        _this.force = force;
        return _this;
    }
    Guerrier.prototype.frapper = function (adversaire) {
        adversaire.setVie(-this.force * 10);
        return this.force * 10;
    };
    return Guerrier;
}(Personnage));
var Magicien = /** @class */ (function (_super) {
    __extends(Magicien, _super);
    function Magicien(nom, vie, force) {
        var _this = _super.call(this) || this;
        _this.nom = nom;
        _this.vie = vie;
        _this.force = force;
        return _this;
    }
    Magicien.prototype.frapper = function (adversaire) {
        adversaire.setVie(-this.force * 15);
        return this.force * 15;
    };
    return Magicien;
}(Personnage));
var guerrier1 = new Guerrier("A", 200, 10);
var magicien1 = new Magicien("B", 500, 5);
guerrier1.frapper(magicien1); // 400
magicien1.frapper(guerrier1); //
guerrier1.frapper(magicien1); // 300
guerrier1.frapper(magicien1); // 200
console.log(magicien1.getVie()); // 200
console.log(guerrier1.getVie()); // 200
// tsc 04-exo.ts && node 04-exo.js
