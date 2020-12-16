// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function cenaPoCmKvadrat(poluprecnik, cenaPice) {
    let povrsina = poluprecnik ** 2 * Math.PI
    let cenaPoCmK = cenaPice / povrsina
    return cenaPoCmK
}

console.log(`Cena pice po cm kvadratnom je: ${cenaPoCmKvadrat(10,500)}`);