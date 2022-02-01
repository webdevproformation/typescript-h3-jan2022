import {render , Pays} from "./lib.js";

let data : any ; 



document.addEventListener("DOMContentLoaded", async () => {
    const reponse = await fetch("https://restcountries.com/v3.1/all") 
    data = (await reponse.json()) as Array<Partial<Pays>>;
    const regions = new Set();
    let html = "";
    data.forEach(pays => regions.add(pays.region ))
    regions.forEach( region => html += `<option>${region}</option>` )
    document.querySelector("select").innerHTML = html; 

    render(data)
})

document.querySelector("form").addEventListener("submit" , (e : Event) => {
    e.preventDefault()
    const input = document.querySelector("input[type='text']") as HTMLInputElement ;
    const select = document.querySelector("select") as HTMLSelectElement ;
    console.log(select.value)
    const listePaysFiltre = data.filter( pays =>  pays.name.common.toLowerCase().includes(input.value.toLowerCase() && pays.region == select.value)    
    )
    render(listePaysFiltre)
})

// cd ../jour3-tp
// tsc index.ts --lib "ES2015","DOM" --watch --target es6

// rajouter un menu déroulant <select>
//   <option>afrique</option>
//    <option>europe</option>
//</select>
// quand la valeur est choisie => lance un deuxième filtrage 