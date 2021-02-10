import { useEffect, useState } from "react"
import { getQuotes } from "./service"

const Quotes = () => {
    const [quotes,setQuotes] = useState([])

    useEffect(()=>{
        getQuotes().then(res=>{
            setQuotes(res.data);
        })
    },[])
    return (
        <>
            <h1>Quotes</h1>
            { quotes.map(quote => 
                <div key={quote.id}>
                    <p>Quote : {quote.text}</p>
                    <p>Author : {quote.author}</p>
                    <hr/>
                </div>
            ) }
        </>
    )
}

export default Quotes