import { useState } from "react"


const Kalkulator = () => {
  const [inputPrikaz,setInputPrikaz] = useState(0)
  const [inputUnos,setInputUnos] = useState(0)

  return (
    <>
      <input value={inputPrikaz} onChange={(event)=> setInputPrikaz(event.target.value)} />
      <input type='Number' value={inputUnos} onChange={(event)=> setInputUnos(event.target.value)} />
      <button onClick={()=>{setInputPrikaz(Number(inputPrikaz) + Number(inputUnos))}}>+</button>
      <button onClick={()=>{setInputPrikaz(Number(inputPrikaz) - Number(inputUnos))}}>-</button>
      <button onClick={()=>{setInputPrikaz(Number(inputPrikaz) * Number(inputUnos))}}>*</button>
      <button onClick={()=>{setInputPrikaz(Number(inputPrikaz) / Number(inputUnos))}}>/</button>
      <button onClick={()=>{setInputPrikaz(0) 
                            setInputUnos(0)}}>clear</button>
      <p></p>
    </>
  )
}

const App = () => {
  return (
    <>
      <h1>Calculator</h1>
      <Kalkulator />
    </>
  )
}

export default App;
