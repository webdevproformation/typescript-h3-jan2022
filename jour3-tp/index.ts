import {render , Pays} from "./lib.js";

let data : any ; 

document.addEventListener("DOMContentLoaded", async () => {
    const reponse = await fetch("https://restcountries.com/v3.1/all") 
    data = (await reponse.json()) as Array<Partial<Pays>>;
    render(data)
})

document.querySelector("form").addEventListener("submit" , (e : Event) => {
    e.preventDefault()
    const input = document.querySelector("input[type='text']") as HTMLInputElement ;
    const listePaysFiltre = data.filter( pays =>  pays.name.common.toLowerCase().includes(input.value.toLowerCase())    
    )
    render(listePaysFiltre)
})

// cd ../jour3-tp
// tsc index.ts --lib "ES2015","DOM" --watch --target es6