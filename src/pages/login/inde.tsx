
import { Link, useNavigate } from "react-router-dom"
import { Button, DivSeparaçao, Divcentra, Divlogin, Input, Label, Title } from "./style"
import { useState } from "react"
import { Loginn } from "../../services/user"


 



function Login() {
const [email,setEmail] = useState('')
const [password,setPessword] = useState('')
const navegete = useNavigate()
const startLogin = () => {
  Loginn(email,password)
  navegete('/kambam')
}


  return (
    <Divcentra>
      <Divlogin>
        <Title>Arnia trello</Title>
        <DivSeparaçao>
          <Label>E-mail</Label><br />
          <Input value={email} onChange={event => setEmail(event.target.value)} />
        </DivSeparaçao>
        <DivSeparaçao>
          <Label>Senha</Label><br />
          <Input value={password} onChange={event => setPessword(event.target.value)}/>
        </DivSeparaçao>
        <Button onClick={startLogin}>Entrar</Button><br />
        <Link to={"/cadastro"}> cadastra usuario </Link>
      </Divlogin>
    </Divcentra>
  )
}

export default Login
