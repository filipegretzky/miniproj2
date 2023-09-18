import { useState, useEffect } from "react"
import { Diviprinc } from "./style"
import { DeleteCards, GetCards } from "../../services/card-config"
import Card from "../../component/cards"
import NewCards from "../../component/newCards"



const Kamnbam = () => {
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
   
 const onDeleteCard = async  (id: string) => {
     const newCards =  await DeleteCards(id)
     if(newCards){
        setCards(newCards)
     }
      }

    return(
        <Diviprinc>
           <NewCards/>
            <div>
            {cards.map((card)=> (<Card title={card.title} content={card.content} onClickExclude={() => onDeleteCard(card._id)} ></Card>))}
            </div>
        
           
          </Diviprinc>
    )  
}
export default Kamnbam

