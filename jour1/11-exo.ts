interface interfaceForme{
    couleur : string , 
    background : string ,
    position : number , 
    fontFamily ?: string
}

function dessiner( forme : interfaceForme ) :string{
    return `j'utilise la couleur ${forme.couleur} sur un fond de ${forme.background} à la position ${forme.position} avec un police de caractère ${ (!forme.fontFamily) ? "" : forme.fontFamily }\n`;
}

const r1 = dessiner({couleur : "#000" , background : "#fff" , position : 12});
const r2 = dessiner({couleur : "#eee" , background : "#aaa" , position : 1 , fontFamily : "Arial"});
const r3 = dessiner({couleur : "#999" , background : "#123" , position : 120});

console.log(r1, r2, r3) ; 
// tsc 11-exo.ts && node 11-exo.js

// 12-narrowing.ts