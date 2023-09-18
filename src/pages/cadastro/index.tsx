import { Link } from "react-router-dom"
import { Divcentra } from "../login/style"
import { Buttonc, DivComponente, Divcadastro, Inpuntc, Labelc, SubTitle, Titlec } from "./style"
import { useState } from "react"
import { Cadastrouser } from "../../services/user"


const Cadastro = () => {
    const [email,setEmail] = useState('')
    const [password,setPessword] = useState('')
    const [name,setName] = useState('')

    const startCadastro = () => {
        Cadastrouser(email,password,name)
    }

    return (
        <Divcentra>
            <Divcadastro>
                <Titlec>Arnia trello</Titlec>
                <SubTitle>Cadastro</SubTitle>
                <DivComponente>
                <Labelc>Nome completo</Labelc><br/>
                <Inpuntc value={name} onChange={event => setName(event.target.value)} />
                </DivComponente>
                <DivComponente>
                <Labelc>E-mail</Labelc><br/>
                <Inpuntc value={email} onChange={event => setEmail(event.target.value)}/>
                </DivComponente>
                <DivComponente>
                <Labelc>Senha</Labelc><br/>
                <Inpuntc/>
                </DivComponente>
                <DivComponente>
                <Labelc>Comfirma senha </Labelc><br/>
                <Inpuntc value={password} onChange={event => setPessword(event.target.value)}/>
                </DivComponente>
                <Buttonc onClick={startCadastro} >Cadastrar</Buttonc><br/>
                <Link to={"/"}>Volta ao login</Link>
            </Divcadastro>

        </Divcentra>

    )
}

export default Cadastro