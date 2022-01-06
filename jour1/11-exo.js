function dessiner(forme) {
    return "j'utilise la couleur ".concat(forme.couleur, " sur un fond de ").concat(forme.background, " \u00E0 la position ").concat(forme.position, " avec un police de caract\u00E8re ").concat((!forme.fontFamily) ? "" : forme.fontFamily, "\n");
}
var r1 = dessiner({ couleur: "#000", background: "#fff", position: 12 });
var r2 = dessiner({ couleur: "#eee", background: "#aaa", position: 1, fontFamily: "Arial" });
var r3 = dessiner({ couleur: "#999", background: "#123", position: 120 });
console.log(r1, r2, r3);
// tsc 11-exo.ts && node 11-exo.js
