var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "ora"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var ora_1 = __importDefault(require("ora"));
    console.log(ora_1["default"]);
    console.log("tata");
});
//# sourceMappingURL=07-exo.js.map