
interface Animal{
    legs ?: number
}

function addLeg(animal: Animal) {
    if(typeof animal.legs == "number"){ // typeof 
        animal.legs = animal.legs + 1; // 💥 - Object is possibly 'undefined'
    }else {
        console.log("erreur")
    }

    if("legs" in animal){ // in
        animal.legs = animal.legs + 1; // 💥 - Object is possibly 'undefined'
    }else {
        console.log("erreur")
    }
}
const chien = {};
addLeg(chien)

console.log(chien)