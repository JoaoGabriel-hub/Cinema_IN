import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import style from "./sessões.module.css"
import { Horarios } from "../components/Horarios"

export function Sessões() {
    return(
        <>
            <Header />
            <Horarios/>
            <Footer />
        </>
    )
}