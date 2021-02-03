import { useEffect, useState } from "react"
import { getPastLaunches } from "./service"

const App = () => {

  const [launches,setLaunches] = useState([])

  useEffect(() => {
    getPastLaunches().then(res => setLaunches(res.data))
},[])

  return (
    <>
      <h1>Space-X</h1>
      <select>
        <option>Select year</option>
      </select>
      {launches.map(launch => <p key={launch.id}>{launch.name} </p>)}
      
    </>
  )
}

export default App;
