// 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

// Даље, направити низ од ових објеката

// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 90

let Pokemon1 = {
    ime: 'Pikachu',
    vrsta: 'Električni',
    sposobnosti: ['Thunder Shock', 'Growl', 'Tail Whip'],
    karakteristike: {napad:55, odbrana:30 ,brzina:90}
}
let Pokemon2 = {
    ime: 'Mewtwo',
    vrsta: 'Psihički',
    sposobnosti: ['Confusion', 'Disable', 'Barrier'],
    karakteristike: {napad:110, odbrana:90 ,brzina:130}
}
let Pokemon3 = {
    ime: 'Charizard',
    vrsta: 'Vatreni/Leteći',
    sposobnosti: ['Dragon Claw', 'Shadow Claw', 'Air Slash'],
    karakteristike: {napad:84, odbrana:78 ,brzina:100}
}
let Pokemon4 = {
    ime: 'Psyduck',
    vrsta: 'Vodeni',
    sposobnosti: ['Scratch', 'Water Sport', 'Tail Whip'],
    karakteristike: {napad:52, odbrana:48 ,brzina:55}
}

let Pokemoni = [Pokemon1, Pokemon2, Pokemon3, Pokemon4]

console.log('-----------------------------------------');

// 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

let sposobnostiSvih = []
function Pokemon(array){
    for (let i = 0; i < array.length; i++){
        sposobnostiSvih.push(array[i].sposobnosti)        
    }
    return sposobnostiSvih
}

console.log('-----------------------------------------');

// 3. Сортирати покемоне по брзини, растуће.

let sortBrzina = []
function sortPoBrzini(array){
    for (let i = 0; i < array.length; i++) {
        sortBrzina.push(array[i].karakteristike.brzina)
    }
    return sortBrzina.sort((a,b) => a - b)
}
