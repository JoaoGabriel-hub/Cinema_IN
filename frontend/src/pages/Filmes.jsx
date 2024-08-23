import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardFilme } from "../components/CardFilme";
import style from "./filmes.module.css";

export function Filmes() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Erro ao buscar filmes:", error));
    }, []);

    return (
        <>
            <Header />
            <div className={style.pesquisafundo}>
                <div className={style.pesquisa}>
                    <input className={style.barra}
                        type="text" 
                        placeholder="Pesquisar filmes"
                    />
                    <button className={style.botaopesquisa}>
                        <img src="src/assets/Botao-Pesquisa.svg" alt="Pesquisar" />
                    </button>
                </div>
                <div className={style.filtros}>
                    <select className={style.filter} name="Gênero">
                        <option disabled selected>Gênero</option>
                        <option value="">Ação</option>
                        <option value="">Aventura</option>
                        <option value="">Animação</option>
                        <option value="">Comédia</option>
                        <option value="">Drama</option>
                        <option value="">Fantasia</option>
                    </select>
                    <select className={style.filter} name="Classificação">
                        <option disabled selected>Classificação</option>
                        <option value="livre">Livre</option>
                        <option value="dez">+10 anos</option>
                        <option value="doze">+12 anos</option>
                        <option value="dezesseis">+16 anos</option>
                        <option value="dezoito">+18 anos</option>
                    </select>
                </div>
            </div>

            <div className={style.corpo}>
                <h1>Filmes</h1>
                <div className={style.filmes}>
                    {movies.map((movie) => (
                        <CardFilme key={movie.movieId} movie={movie} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

