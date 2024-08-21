import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./horarios.module.css";

export function Horarios() {
    const [activeSession, setActiveSession] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (hora, tipoTela) => {
        navigate('/checkout', { state: { hora, tipoTela } });
    };

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
                    <button className={style.botaohorario} onClick={() => handleButtonClick('9:20', '2D')}>9:20</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('12:50', '2D')}>12:50</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('17:30', '2D')}>17:30</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('21:20', '2D')}>21:20</button>
                </div>
            </div>

            <div className={style.sessoes} id="3D" style={{ display: activeSession === '3D' || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>3D</div>
                <div className={style.tdhora}>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('13:40', '3D')}>13:40</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('15:00', '3D')}>15:00</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('19:10', '3D')}>19:10</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('22:30', '3D')}>22:30</button>
                </div>
            </div>

            <div className={style.sessoes} id="IMAX" style={{ display: activeSession === 'IMAX' || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>IMAX</div>
                <div className={style.tdhora}>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('14:50', 'IMAX')}>14:50</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('16:10', 'IMAX')}>16:10</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('18:00', 'IMAX')}>18:00</button>
                    <button className={style.botaohorario} onClick={() => handleButtonClick('20:20', 'IMAX')}>20:20</button>
                </div>
            </div>
        </div>
    );
}
