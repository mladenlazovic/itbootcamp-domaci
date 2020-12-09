// За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)
console.log('1. zadatak')
{
    let a = 6
    let b = 2

    console.log('Zbir je:' , a + b)
    console.log('Razlika je: ', a - b)
    console.log('Proizvod je: ', a * b)
    console.log('Kolicnik je: ', a / b)
    console.log('Ostatak pri deljenju je: ', a % b)
    console.log('Stepen je: ', a ** b)
}

// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

console.log('2. zadatak')
{
    let cena = 50
    let novac = 60

    if(cena > novac){
        console.log('Nemate dovoljno novca')
    }
    else{
        console.log('Uspesno ste kupili proizvod')
    }
}

// Направити променљиву која има вредност неког броја (цео број)
// Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
// Ако није, Број _ није дељив са 3

console.log('3. zadatak')
{
    let num = 9

    if(num % 3 == 0){
        console.log('Broj', num, 'je deljiv sa 3')
    }
    else{
        console.log('Broj', num, 'nije deljiv sa 3')
    }
}

// Исписати првих 1000 бројева дељивих са 5

console.log('4. zadatak')
{
    for(i = 0; i <= 1000; i++){
        if(i % 5 == 0){
        console.log(i)
        }
    }
}