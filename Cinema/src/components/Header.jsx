import style from "./header.module.css"

export function Header() {
    return(
        <div>
            <div className={style.header}>
                <img src="src/assets/Logo.svg" className={style.logo} />
                <div className={style.buttons}>
                    <button>
                        <img src="src/assets/Icone-Filmes.svg"/>
                    </button>
                    <button>
                        <img src="src/assets/Icone-Entrar.svg"/>
                    </button>
                    <button>
                        <img src="src/assets/Icone-Ajuda.svg"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

