import { useState } from "react"
import { v1 as uuidv1} from 'uuid'
import { postUsers } from "./service"

const Register = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <>
            <h1>Register</h1>
            <input type="text" placeholder="username..."  onChange={(e)=> setUsername(e.target.value)} />
            <input type="email" placeholder="email..."  onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder="password..."  onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={()=> {
                let newUser = {
                    id: uuidv1(),
                    username: username,
                    email: email,
                    password: password
                }
                if(
                    username.length < 4 &&
                    username === newUser.username &&
                    email === newUser.email
                ){return console.log('Username mora imati makar 4 slova. Username ili email su zauzeti') }
                else{
                    postUsers(newUser)
                    setUsername('')
                    setEmail('')
                    setPassword('')
                }
            }} >Register</button>
        </>
    )
}

export default Register