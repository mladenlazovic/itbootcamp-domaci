import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getUsers } from "./service"

const Login = ({setUser}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory()

    return (
        <form onSubmit={e => {
            e.preventDefault()
            getUsers().then(res => {
                let user = res.data.find(el => el.username === username && el.password === password)
                if(user){
                    setUser(user)
                    history.push('/quotes')
                }
                else{
                    console.warn('Neispravni podaci')
                }
            })
        }}>
            <h1>Login</h1>
            <input type="text" placeholder="username..." onChange={(e)=> setUsername(e.target.value)} />
            <input type="password" placeholder="password..." onChange={(e)=> setPassword(e.target.value)} />
            <input type="submit" value="Login"/>
            <Link style={{padding:5}} to="/register">Register</Link>
        </form>
    )
}

export default Login