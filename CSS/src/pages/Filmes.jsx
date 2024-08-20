import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import style from "./filmes.module.css"

export function Filmes() {
    return(
        <>
            <Header />
            
            <div>
                <input type="text" 
                        placeholder="Pesquisar filmes"/>
            </div>

            <div></div>

            <div></div>

            <Footer />
        </>
    )
}