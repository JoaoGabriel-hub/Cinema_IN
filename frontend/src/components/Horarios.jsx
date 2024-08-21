import style from "./horarios.module.css"

export function Horarios() {
    return(
        <>
        <div className={style.telas}>
            <button className={style.botaosessao}>2D</button>
            <button className={style.botaosessao}>3D</button>
            <button className={style.botaosessao}>IMAX</button>
        </div>

        <div className={style.sessoes}>
            <div className={style.titulo}>2D</div>
            <div className={style.tdhora}>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
            </div>
        </div>
        <div className={style.sessoes}>
            <div className={style.titulo}>2D</div>
            <div className={style.tdhora}>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
            </div>
        </div>
        <div className={style.sessoes}>
            <div className={style.titulo}>3D</div>
            <div className={style.tdhora}>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
                <button className={style.botaohorario}></button>
            </div>
        </div>
        </>
    )
}