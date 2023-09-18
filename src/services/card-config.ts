import { AxiosResponse, isAxiosError } from 'axios'
import api from './config'

type GetCardstype = {
    id: string
    title:string
    content: string
    column: string
}

export const getCarts = async (title:string,content:string) => {

    try{
      const userCards: AxiosResponse<GetCardstype> = await api.post('/api/card' , {
       title,
       content

      })

      const titlee= userCards.data.title
      const contentt = userCards.data.content
      alert('crieide'+ contentt)
      return titlee
    }
    catch(error) {
        if(isAxiosError(error)) {
            if(error.status === 404){
                 alert('neo fincionou')
                 return'nao funcionou'
                 
            }
            if(error.status === 401){
                alert('nao deu certo')
                return'nao deu certo'
                
           }
        }
    }
   
}  
export const GetCards = async () => {
    try {
      const token = localStorage.getItem("token")
      const cards: AxiosResponse<CardType[]> = await api.get("/api/card", {
        headers: { Authorization: token },
      })
  
      return cards.data
    } catch (error) {
      console.log(error)
    }
  }
  