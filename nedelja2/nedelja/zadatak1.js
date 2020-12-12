// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу

let cena = 650
let precnik = 26

let r = precnik / 2
let povrsina = r **2 * Math.PI


let cenaPoCmKvadrat = cena / povrsina

console.log('цена пице по цм²:',cenaPoCmKvadrat);