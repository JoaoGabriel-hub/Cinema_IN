import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import style from "./registrar.module.css"
import BotRegistrar from "../components/BotRegistrar.jsx"

export function Registrar() {
    return(
        <>
            <Header />
            <div className={style.corporegistro}>
                <div className={style.apresentacao}>
                    <h1>
                        Junte-se à Comunidade Cinematográfica! 
                        Cadastre-se Aqui!
                    </h1>
                    <h2>
                        Seja bem-vindo à nossa comunidade apaixonada 
                        pelo mundo do cinema. Ao fazer parte do nosso 
                        espaço digital, você está prestes a mergulhar 
                        em uma experiência cinematográfica única, onde a 
                        magia das telonas ganha vida com um toque moderno.<br></br>
                        Nosso formulário de cadastro é o primeiro passo para 
                        embarcar nessa jornada emocionante. Ao preenchê-lo, 
                        você se tornará um membro da nossa comunidade, onde 
                        amantes do cinema se reúnem para compartilhar o 
                        entusiasmo, as emoções e as histórias que permeiam 
                        cada cena.
                    </h2>
                </div>
                
                <div className={style.formulario}>
                    <h1>Registre-se</h1>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        name="nome"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Sobrenome" 
                        name="sobrenome"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="CPF" 
                        name="cpf"  
                        required
                    />
                    <input 
                        type="data" 
                        placeholder="Data de nascimento" 
                        name="data-nascimento"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Nome de Usuário" 
                        name="nome-usuario"
                        required
                    />
                    <input 
                        type="email"
                        placeholder="E-Mail" 
                        name="email"
                     />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        name="senha"
                    />
                    <input 
                        type="password" 
                        placeholder="Confirmar senha" 
                        name="confirmar-senha"
                        required
                    />
                
                    <div className={style.botaoregistrar}>
                        <BotRegistrar/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}