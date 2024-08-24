import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./horarios.module.css";

export function Horarios({ movie, sessoes }) {
    const [activeSession, setActiveSession] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (hora, tipoTela) => {
        navigate(`/checkout/${movie.movieId}`, { state: { movie: { id: movie.id }, hora, tipoTela } });
    };

    const renderSessoes = (tipoTela) => {
        const sessoesFiltradas = sessoes.filter(sessao => sessao.type === tipoTela);

        if (sessoesFiltradas.length === 0) {
            return <p className={style.indisponivel}>Sem sessões disponíveis</p>;
        }

        return sessoesFiltradas.map(sessao => (
            <button key={sessao.time} className={style.botaohorario} onClick={() => handleButtonClick(sessao.time, tipoTela)}>
                {sessao.time}
            </button>
        ));
    };

    return (
        <div className={style.corpohorarios}>
            <div className={style.telas}>
                <button className={style.botaosessao} onClick={() => setActiveSession(0)}>2D</button>
                <button className={style.botaosessao} onClick={() => setActiveSession(1)}>3D</button>
                <button className={style.botaosessao} onClick={() => setActiveSession(2)}>IMAX</button>
            </div>

            <div className={style.sessoes} id="2D" style={{ display: activeSession === 0 || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>2D</div>
                <div className={style.tdhora}>
                    {renderSessoes(0)}
                </div>
            </div>

            <div className={style.sessoes} id="3D" style={{ display: activeSession === 1 || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>3D</div>
                <div className={style.tdhora}>
                    {renderSessoes(1)}
                </div>
            </div>

            <div className={style.sessoes} id="IMAX" style={{ display: activeSession === 2 || activeSession === null ? 'block' : 'none' }}>
                <div className={style.titulo}>IMAX</div>
                <div className={style.tdhora}>
                    {renderSessoes(2)}
                </div>
            </div>
        </div>
    );
}
