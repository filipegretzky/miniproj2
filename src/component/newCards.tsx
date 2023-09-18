import { useState } from "react"
import { getCarts } from "../services/card-config"



const NewCards = () => {

    const [title,setTitle] = useState('')
    const [content,setcontet]= useState('')
    const startCadastroCart = () => {
        getCarts(title,content)


    }

    return(
        <div>
             <label htmlFor="">titolo</label>
            <input value={title} onChange={event => setTitle(event.target.value)}/>
            <label htmlFor="">contet</label>
            <input value={content} onChange={event => setcontet(event.target.value)}/> 
            <button onClick={startCadastroCart}>cadastrar</button>
        </div>
    )
}
export default NewCards