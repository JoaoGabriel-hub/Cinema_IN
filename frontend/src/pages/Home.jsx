import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import style from "./home.module.css"
import { Carousel } from "../components/Carousel"

export function Home() {
    return(
        <>
            <Header />
            <div>
                <header>
                    <h1>
                        Transformando Filmes em Experiências <br/>
                        Personalizadas
                    </h1>
                    <h2>
                        Reserve Seu Assento e Viva a Magia do Cinema!
                    </h2>
                </header>
                <Carousel/>
                <footer>
                    <h1>Em Cartaz</h1>
                    <div className={style.filmes}>
                        <div className={style.emcartaz}>
                            <img src="" className={style.cartaz} />
                            <h2>Título do filme</h2>
                            <NavLink to="/sessoes">
                                <button className={style.sessoes}>
                                    SESSÕES DISPONÍVEIS
                                </button>
                            </NavLink>
                        </div>
                        <div className={style.emcartaz}>
                            <img src="" className={style.cartaz} />
                            <h2>Título do filme</h2>
                            <NavLink to="/sessoes">
                                <button className={style.sessoes}>
                                    SESSÕES DISPONÍVEIS
                                </button>
                            </NavLink>
                        </div>
                        <div className={style.emcartaz}>
                            <img src="" className={style.cartaz} />
                            <h2>Título do filme</h2>
                            <NavLink to="/sessoes">
                                <button className={style.sessoes}>
                                    SESSÕES DISPONÍVEIS
                                </button>
                            </NavLink>
                        </div>
                        <div className={style.emcartaz}>
                            <img src="" className={style.cartaz} />
                            <h2>Título do filme</h2>
                            <NavLink to="/sessoes">
                                <button className={style.sessoes}>
                                    SESSÕES DISPONÍVEIS
                                </button>
                            </NavLink>
                        </div>
                        <div className={style.emcartaz}>
                            <img src="" className={style.cartaz} />
                            <h2>Título do filme</h2>
                            <NavLink to="/sessoes">
                                <button className={style.sessoes}>
                                SESSÕES DISPONÍVEIS
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to="/filmes" className={style.vermaisfilmes}>Ver mais</NavLink>
                </footer>
            </div>
            <Footer />
        </>
    )
}