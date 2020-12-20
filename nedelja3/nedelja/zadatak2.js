// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

// lifeSupply(10,26) // Враћа 8880
// console.log(lifeSupply(10,26)) // Исписује 8880

function lifeSupply(pica,godine){
    let picaM = pica * 12
    let godinaP = 100 - godine
    return picaM * godinaP
}

console.log(lifeSupply(10,26))