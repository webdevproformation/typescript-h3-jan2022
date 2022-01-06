"use strict";
exports.__esModule = true;
var calcul = function (a, b) {
    console.log(a * b);
};
calcul(1, 4);
calcul(5, 2);
var A = (function () {
    function A(i, j) {
        this.i = i;
        this.j = j;
    }
    A.prototype.calcul = function () {
        return this.i * this.j;
    };
    return A;
}());
var test1 = new A(1, 2);
test1.calcul();
function B(i, j) {
    this.i = i;
    this.j = j;
}
B.prototype.calcul = function () {
    return this.i * this.j;
};
var test2 = new B(2, 3);
test2.calcul();
