import style from "./footer.module.css"
import { NavLink } from "react-router-dom"

export function Footer() {
    return(
        <div>
            <div className={style.footer}>
                <div className={style.footerUp}>
                    <div className={style.info}>
                        <div className={style.infoBox}>
                            <h2>Endereço</h2>
                            <p>
                                Av. Milton Tavares de Souza, <br></br>
                                s/n - Sala 115 B - Boa Viagem, <br></br>
                                Niterói - RJ <br></br>
                                CEP: 24210-315 
                            </p>
                        </div>
                        <div className={style.infoBox}>
                            <h2>Fale conosco</h2>
                            <p>contato@injunior.com</p>
                            <div className={style.buttons}>
                                <a href="https://www.instagram.com/injunioruff/">
                                    <button>
                                        <img src="src/assets/Icone-Instagram.svg" alt="Instagram" />
                                    </button>
                                </a>
                                <a href="https://www.facebook.com/injunioruff/">
                                    <button>
                                        <img src="src/assets/Icone-Facebook.svg" alt="Facebook" />
                                    </button>
                                </a>
                                <a href="https://www.linkedin.com/company/in-junior/?originalSubdomain=br">
                                <button>
                                    <img src="src/assets/Icone-Linkedin.svg" alt="Linkedin" />
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/">
                        <img src="src/assets/INgresso.svg" className={style.INgresso}/>
                    </NavLink>
                    
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Universidade%20federal%20fluminense%20instituto%20de%20computa%C3%A7%C3%A3o+(Injunior)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>

            <div className={style.copyrigth}>
                © Copyright 2023. IN Junior. Todos os direitos reservados. Niterói, Brasil.
            </div>
            
        </div>
    )

}