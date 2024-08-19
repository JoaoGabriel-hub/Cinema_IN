import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import style from "./home.module.css"

export function Home() {
    return(
        <>
            <Header />
            <Footer />
        </>
    )
}