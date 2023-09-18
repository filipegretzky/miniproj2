import { useState, useEffect } from "react"
import { Diviprinc } from "./style"
import { GetCards, getCarts } from "../../services/card-config"
import Card from "../../component/cards"



const Kamnbam = () => {

    const [title,setTitle] = useState('')
    const [content,setcontet]= useState('')
    const [cards,setCards]=useState<CardType[]>([])

useEffect(() => {
    const fetCards = async() => {
        const api = await GetCards()
        if(api) {
       setCards(api)
        }
        
    }
    fetCards()
})
    const startCadastroCart = () => {
        getCarts(title,content)


    }
    const onDeleteCard =  (id: string) => {
     
      }

    return(
        <Diviprinc>
            <div>
            <label htmlFor="">titolo</label>
            <input value={title} onChange={event => setTitle(event.target.value)}/>
            <label htmlFor="">contet</label>
            <input value={content} onChange={event => setcontet(event.target.value)}/> 
            <button onClick={startCadastroCart}>cadastrar</button>
            </div>
            <div>
            {cards.map((card)=> (<Card title={card.title} content={card.content} onClickExclude={() => onDeleteCard(card._id)} ></Card>))}
            </div>
        
           
          </Diviprinc>
    )  
}
export default Kamnbam

