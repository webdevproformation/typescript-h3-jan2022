export function render(data) {
    let html = "";
    data.forEach(pays => {
        const devise = (pays.currencies) ? pays.currencies[Object.keys(pays.currencies)[0]].name : "";
        html += `
        <article>
            <img src="${pays.flags.png}" alt="">
            <h2>${pays.name.common}</h2>
            <p>${devise}</p>
        </article>
        `;
    });
    document.querySelector("main").innerHTML = html;
}
