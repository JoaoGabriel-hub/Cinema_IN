import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";
import style from "./home.module.css";
import { Carousel } from "../components/Carousel";

export function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <Header />
            <div>
                <header>
                    <h1>
                        Transformando Filmes em Experiências <br />
                        Personalizadas
                    </h1>
                    <h2>
                        Reserve Seu Assento e Viva a Magia do Cinema!
                    </h2>
                </header>
                <Carousel />
                <footer>
                    <h1>Em Cartaz</h1>
                    <div className={style.filmes}>
                        {movies.slice(0, 5).map(movie => (
                            <div key={movie.id} className={style.emcartaz}>
                                <img src={movie.imageUrl} alt={movie.title} className={style.cartaz} />
                                <h2>{movie.title}</h2>
                                <NavLink to={`/sessoes/${movie.id}`}>
                                    <button className={style.sessoes}>
                                        SESSÕES DISPONÍVEIS
                                    </button>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    <NavLink to="/filmes" className={style.vermaisfilmes}>Ver mais</NavLink>
                </footer>
            </div>
            <Footer />
        </>
    );
}

