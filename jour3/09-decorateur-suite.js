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
    if (descriptor) {
        descriptor.writable = false;
        return descriptor;
    }
    return {
        get: function get() {
            // Return the stored value for the instance.
        },
        set: function set() {
            // Check if it is the first time to set value.
            // If true store the value, else console.error.
        }
    };
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
