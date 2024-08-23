import React from 'react';
import style from "./cardfilme.module.css";
import { NavLink } from 'react-router-dom';

export function CardFilme({ movie }) {

    function getRatingImage(rating) {
        switch(rating) {
            case 1:
                return "/src/assets/10anos.svg";
            case 2:
                return "/src/assets/12anos.svg";
            case 3:
                return "/src/assets/14anos.svg";
            case 4:
                return "/src/assets/16anos.svg";
            case 5:
                return "/src/assets/18anos.png";
            default:
                return "/src/assets/Livre.svg"; 
        }
    }
    return (
        <div className={style.card}>
            <img src={movie.imageUrl} className={style.poster} alt={movie.title}/>
            <div className={style.datacard}>
                <div>
                    <h3>{movie.title}</h3>
                    <img src={getRatingImage(movie.rating)} className={style.rating} alt="Classificação etária"/>
                </div>
                <div>
                    <p>{movie.genre}</p>
                    <p>Direção: {movie.director}</p>
                    <p>{movie.synopsis}</p>
                </div>
            </div>
            <NavLink to={`/sessoes/${movie.movieId}`} state={{ movie }}>
                <button>VER SESSÕES</button>
            </NavLink>
        </div>
    );
}



