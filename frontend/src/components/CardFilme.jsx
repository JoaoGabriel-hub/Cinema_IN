import React from 'react';
import style from "./cardfilme.module.css";
import { NavLink } from 'react-router-dom';

export function CardFilme({ movie }) {
    return (
        <div className={style.card}>
            <img src={movie.imageUrl} className={style.poster} alt={movie.title}/>
            <div className={style.datacard}>
                <div>
                    <h3>{movie.title}</h3>
                    <img src="src/assets/idade.svg" className={style.ageclass} alt="Classificação etária"/>
                </div>
                <div>
                    <p>{movie.genre}</p>
                    <p>Direção: {movie.director}</p>
                    <p>{movie.synopsis}</p>
                </div>
            </div>
            <NavLink to='/sessoes' state={{ movie }}>
                <button>VER SESSÕES</button>
            </NavLink>
        </div>
    );
}



