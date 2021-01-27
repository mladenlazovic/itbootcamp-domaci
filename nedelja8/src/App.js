const ShoppingItems = () => {
  let id = 0
  let shopingitems = [
    {
      naziv: "Mleko - ",
      cena: 100
    },
    {
      naziv: "Hleb - ",
      cena: 50
    },
    {
      naziv: "Jaja - ",
      cena: 150
    }
  ]

  return (
    <div>
      {
      shopingitems.map(item => <p key={id++}><li>{item.naziv}{item.cena}</li></p>)
    }
    </div>
    )
}


const ShoppingList = ({ ime }) => {
  return (
    <>
      <h1>Shopping list for {ime}</h1>
      <ShoppingItems></ShoppingItems>
    </>
  )
}



const App = () => {
  return (
    <>
    <ShoppingList ime = "Pera"></ShoppingList>
    </>
  )
}

export default App;
