import style from "./header.module.css"
import { NavLink } from "react-router-dom"

export function Header() {
    return(
        <div>
            <div className={style.header}>
                <img src="src/assets/Logo.svg" className={style.logo} />
                <div className={style.buttons}>
                    <NavLink to="/filmes">
                        <button>
                            <img src="src/assets/Icone-Filmes.svg"/>
                        </button>
                    </NavLink>
                    <NavLink to="/login">
                        <button>
                            <img src="src/assets/Icone-Entrar.svg"/>
                        </button>
                    </NavLink>
                    <NavLink to="/faleconosco">
                        <button>
                            <img src="src/assets/Icone-Ajuda.svg"/>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

