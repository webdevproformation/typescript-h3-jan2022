"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function aggregate(tableau1, tableau2) {
    return __spreadArray(__spreadArray([], tableau1, true), tableau2, true);
}
console.log(aggregate(["a", "b"], ["c", "d"]));
console.log(aggregate([1, 2], [3, 4]));
// tsc 17-exo.ts && node 17-exo.js
