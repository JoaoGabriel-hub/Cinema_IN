import React, { useState } from 'react';
import style from "./horarios.module.css";

export function Horarios() {
    const [activeSession, setActiveSession] = useState(null);

    return (
        <div className={style.corpohorarios}>
            <div className={style.telas}>
                <button className={style.botaosessao} onClick={() => setActiveSession('2D')}>2D</button>
                <button className={style.botaosessao} onClick={() => setActiveSession('3D')}>3D</button>
                <button className={style.botaosessao} onClick={() => setActiveSession('IMAX')}>IMAX</button>
            </div>

            <div className={style.sessoes} id="2D" style={{ display: activeSession === '2D' || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>2D</div>
                <div className={style.tdhora}>
                    <button className={style.botaohorario}>9:20</button>
                    <button className={style.botaohorario}>12:50</button>
                    <button className={style.botaohorario}>17:30</button>
                    <button className={style.botaohorario}>21:20</button>
                </div>
            </div>

            <div className={style.sessoes} id="3D" style={{ display: activeSession === '3D' || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>3D</div>
                <div className={style.tdhora}>
                    <button className={style.botaohorario}>13:40</button>
                    <button className={style.botaohorario}>15:00</button>
                    <button className={style.botaohorario}>19:10</button>
                    <button className={style.botaohorario}>22:30</button>
                </div>
            </div>

            <div className={style.sessoes} id="IMAX" style={{ display: activeSession === 'IMAX' || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>IMAX</div>
                <div className={style.tdhora}>
                    <button className={style.botaohorario}>14:50</button>
                    <button className={style.botaohorario}>16:10</button>
                    <button className={style.botaohorario}>18:00</button>
                    <button className={style.botaohorario}>20:20</button>
                </div>
            </div>
        </div>
    );
}
