var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { render } from "./lib.js";
let data;
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const reponse = yield fetch("https://restcountries.com/v3.1/all");
    data = (yield reponse.json());
    render(data);
}));
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type='text']");
    const listePaysFiltre = data.filter(pays => pays.name.common.toLowerCase().includes(input.value.toLowerCase()));
    render(listePaysFiltre);
});
// cd ../jour3-tp
// tsc index.ts --lib "ES2015","DOM" --watch --target es6
// rajouter un menu déroulant <select>
//   <option>afrique</option>
//    <option>europe</option>
//</select>
// quand la valeur est choisie => lance un deuxième filtrage 
