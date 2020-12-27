// 6. На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
// Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const dugmeNaruci = document.querySelectorAll('.narucivanje')
const dugmeOdmah = document.querySelectorAll('.narucivanje-odmah')
const div = document.querySelector('#naruci')
let counter = 0

dugmeNaruci.addEventListener('click', () =>{
    counter++
})

dugmeOdmah.addEventListener('click', () =>{
    const ispis = document.createElement('p')
    if(counter > 0){
        ispis.textContent = `Narucili ste ${counter} pica`
    }
    else{
        ispis.textContent = 'Niste narucili picu'
    }
    div.appendChild(ispis)
    counter = 0
})
