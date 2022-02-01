function addLeg(animal) {
    if (typeof animal.legs == "number") {
        animal.legs = animal.legs + 1; // 💥 - Object is possibly 'undefined'
    }
    else {
        console.log("erreur");
    }
}
var chien = {};
addLeg(chien);
console.log(chien);
