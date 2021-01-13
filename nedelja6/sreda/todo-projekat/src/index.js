import service from './service.js'

console.log(service);

const inputText = document.querySelector('#text')
const buttonPotvrda = document.querySelector('#potvrda')
const divIspis = document.querySelector('#ispis')


let items = []
let count = 0

buttonPotvrda.addEventListener('click', () => {
    let divItem = document.createElement('div')
    divItem.className = 'item'

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    let spanText = document.createElement('span')
    spanText.textContent = inputText.value

    let buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'delete'

    divItem.append(checkbox, spanText, buttonDelete)
    divIspis.appendChild(divItem)

    buttonDelete.addEventListener('click', () => {
        divItem.remove()
    })

    checkbox.addEventListener('click', () => {
        spanText.textContent = 'done'
    })

    let item = {
        id: count++,
        desc: inputText.value,
        done: false
    }

    items.push(item)
    console.log(items);
})