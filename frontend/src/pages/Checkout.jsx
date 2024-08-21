import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavLink } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import style from "./checkout.module.css"

export function Checkout() {
    const location = useLocation();
    const { hora, tipoTela } = location.state || {};

    return(
        <>
            <Header />
            <div className={style.asideassentos}>
            {hora && tipoTela ? (
                <div>
                    <div className={style.filme}>
                        <img src="w" className={style.imgfilme}/>
                        <div className={style.dadossessao}>
                            <h3>Nome do Filme</h3>
                            <div>
                                <div className={style.tiposessao}>{tipoTela}</div>
                                <div className={style.tiposessao}>{hora}</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.fundoassentos}>
                        <div>
                            <img src="src/assets/Icone-Assento.svg"/>
                            <h2>ASSENTOS ESCOLHIDOS</h2>
                        </div>
                            <input type="text" name="" id="" className={style.assentos}/>
                            <button>CONFIRMAR</button>
                    </div>
                </div>
            ):(p)};
            </div>
            <div className={style.fundolugares}>

            </div>
            <Footer />
        </>
    )
}