import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import style from "./faleconosco.module.css"
import Aviso from "../components/Aviso"




export function FaleConosco() {
    return(
        <>
            <Header />
            <div className={style.contato}>
                <h1>Contato</h1>
                <h2>Encontrou algum problema? Envie uma mensagem!</h2>
                <input type="text" className={style.input} placeholder="Nome Completo"/>
                <input type="text" className={style.input} placeholder="Assunto"/>
                <textarea type="text" rows={5} className={style.inputdetalhado} placeholder="Descrição Detalhada"/>

                <Aviso></Aviso>
            </div>
            <Footer />
        </>
    )
}