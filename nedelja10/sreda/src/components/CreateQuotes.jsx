import { useState } from "react"
import { postQuotes } from "./service"
import { v1 as uuidv1} from 'uuid'

const CreateQuotes = () => {

    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault()
            let newQuote = {
                id: uuidv1(),
                text: text,
                author: author
            }
            postQuotes(newQuote)
            setText('')
            setAuthor('')
        }}>
            <h1>CreateQuotes</h1>
            <textarea rows="4" cols="30" placeholder="Quote..." onChange={e => setText(e.target.value)} />
            <br />
            <input type="text" placeholder="Author..." onChange={e => setAuthor(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateQuotes