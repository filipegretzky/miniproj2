
import { AxiosResponse, isAxiosError } from 'axios'
import api from './config'
type Cadastroapi = {
    message: string
}
type Loginapi ={
    token : string
    name: string
}
export const Loginn = async (email:string,password:string) => {
    try {
        const userData: AxiosResponse<Loginapi> = await api.post('/api/user/login',{
            email,
            password

        })
        const token = userData.data.token
        const userName = userData.data.name
        localStorage.setItem('token', token)
        alert('deu bom ')
        api.defaults.headers.Authorization = token
        return userName
    } catch(error) {
        if(isAxiosError(error)) {
            if(error.status === 404){
                 alert('usuario nao encontrado')
                 return'isuario nao encontrado'
                 
            }
            if(error.status === 401){
                alert('senha incorreta')
                return'senha incorreta'
                
           }
        }
    }
    
}

export const Cadastrouser = async (name:string,email:string,password:string) => {
try{
   const userDatac:AxiosResponse<Cadastroapi> = await api.post('/api/user',{
  name,
  email,
  password
      }) 

      const message = userDatac.data.message

      alert(message)
      return message

}
catch(error){
    if(isAxiosError(error)){
        if(error.status === 400){
            alert('email ja cadastrado ')
            return'isuario nao encontrado'
        }
}

}    
}