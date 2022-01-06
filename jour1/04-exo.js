(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const data = [
        { id: 1, status: true },
        { id: 2, status: true },
        { id: 3, status: false }
    ];
    const filter = (tableau) => {
        return tableau.filter(element => element.status === false);
    };
    console.log(filter(data));
});
