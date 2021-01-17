// ## Prodavnica
// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.
// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod
// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 
// proizvod moze biti prehrambeni ili bela tehnika
// ako je bela tehnika ima i garanciju
// ako je prehrambeni ima rok trajanja
// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu manju od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe
// 4. Ako je korisnik admin moze da doda nov proizvod

class Kupac {
    username
    password
    korpa
    constructor(username,password){
        this.username = username
        this.password = password
        this.korpa = []
    }

    

}

class Proizvod {
    naziv
    cena
    kolicina
    constructor(naziv,cena,kolicina){
        this.naziv = naziv
        this.cena = cena
        this.kolicina = kolicina
    }
}

let registrovaniKupci = [new Kupac('Ana', '123'), new Kupac('Pera', '456')]

let proizvodi = [new Proizvod('Hleb', '100 din', 10), new Proizvod('Pegla', '3000 din', 3)]

const forma = document.querySelector('#forma')
const inputName = document.querySelector('#username')
const inputPass = document.querySelector('#password')
const divKorpa = document.querySelector('.korpa')
const divProizvodi = document.querySelector('.proizvodi')

divProizvodi.appendChild(proizvodi)


const isValidKupac = kupac =>{
    // valid = false
    // registrovaniKupci.forEach(k => {
    //     if(k.username == kupac.username && k.password == kupac.password)
    //     valid = true
    // })
    // return valid
    return valid = registrovaniKupci.some(k => k.username == kupac.username && k.password == kupac.password)
    
}

forma.addEventListener('submit', (e)=>{
    e.preventDefault()

    let k = new Kupac(inputName.value, inputPass.value)
    if(isValidKupac(k)){
        let korpa = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.innerHTML = `Vasa korpa : ${k.username}`
        korpa.appendChild(h3)
        divKorpa.appendChild(korpa)

    }else{
        console.log('Greska');
    }

    console.log(k);
})