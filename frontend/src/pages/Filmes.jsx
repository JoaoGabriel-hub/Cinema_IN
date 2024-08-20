import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import style from "./filmes.module.css"


export function Filmes() {
    return(
        <>
            <Header />
            <div className={style.pesquisafundo}>
                <div className={style.pesquisa}>
                <input className={style.barra}
                    type="text" 
                    placeholder="Pesquisar filmes"
                />
                <button className={style.botaopesquisa}>
                    <img src="src/assets/Botao-Pesquisa.svg" alt="Pesquisar" />
                </button>
                </div>
                <div className={style.filtros}>
                    <input type="text" className={style.filter}/>
                    <input type="text" className={style.filter}/>
                </div>
            </div>

            <div></div>

            <div></div>
            <Footer />
        </>
    )
}