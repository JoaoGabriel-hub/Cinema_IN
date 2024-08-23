import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardFilme } from "../components/CardFilme";
import style from "./filmes.module.css";

export function Filmes() {
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 6;
    const totalPages = 20;

    const fetchMovies = () => {
        let url = "http://localhost:3000/movies";

        if (selectedGenre || selectedRating) {
            url = `http://localhost:3000/filters?${selectedGenre ? `genre=${selectedGenre}&` : ''}${selectedRating ? `rating=${selectedRating}` : ''}`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Erro ao buscar filmes:", error));
    };

    useEffect(() => {
        fetchMovies();
    }, [selectedGenre, selectedRating]);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

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
                    <select className={style.filter} name="Gênero" onChange={handleGenreChange} value={selectedGenre}>
                        <option disabled value="">Gênero</option>
                        <option value="Action">Ação</option>
                        <option value="Adventure">Aventura</option>
                        <option value="Animation">Animação</option>
                        <option value="Comedy">Comédia</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasia</option>
                        {/* Adicione mais opções de gênero conforme necessário */}
                    </select>
                    <select className={style.filter} name="Classificação" onChange={handleRatingChange} value={selectedRating}>
                        <option disabled value="">Classificação</option>
                        <option value="0">Livre</option>
                        <option value="1">+10 anos</option>
                        <option value="2">+12 anos</option>
                        <option value="3">+14 anos</option>
                        <option value="4">+16 anos</option>
                        <option value="5">+18 anos</option>
                    </select>
                </div>
            </div>

            <div className={style.corpo}>
                <h1>Filmes</h1>
                <div className={style.filmes}>
                    {currentMovies.map((movie, index) => (
                        <CardFilme key={`${movie.movieId}-${index}`} movie={movie} />
                    ))}
                </div>
                <div className={style.pagination}>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? style.active : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}




    // --------------------- BASE CRUA --------------------

    

// import React, { useState, useEffect } from "react";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// import { CardFilme } from "../components/CardFilme";
// import style from "./filmes.module.css";

// export function Filmes() {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:3000/movies")
//             .then((response) => response.json())
//             .then((data) => setMovies(data))
//             .catch((error) => console.error("Erro ao buscar filmes:", error));
//     }, []);

//     return (
//         <>
//             <Header />
//             <div className={style.pesquisafundo}>
//                 <div className={style.pesquisa}>
//                     <input className={style.barra}
//                         type="text" 
//                         placeholder="Pesquisar filmes"
//                     />
//                     <button className={style.botaopesquisa}>
//                         <img src="src/assets/Botao-Pesquisa.svg" alt="Pesquisar" />
//                     </button>
//                 </div>
//                 <div className={style.filtros}>
//                     <select className={style.filter} name="Gênero">
//                         <option disabled selected>Gênero</option>
//                         <option value="Action">Ação</option>
//                         <option value="Adventure">Aventura</option>
//                         <option value="Animation">Animação</option>
//                         <option value="Comedy">Comédia</option>
//                         <option value="Drama">Drama</option>
//                         <option value="Fantasy">Fantasia</option>
//                     </select>
//                     <select className={style.filter} name="Classificação">
//                         <option disabled selected>Classificação</option>
//                         <option value="0">Livre</option>
//                         <option value="1">+10 anos</option>
//                         <option value="2">+12 anos</option>
//                         <option value="3">+14 anos</option>
//                         <option value="4">+16 anos</option>
//                         <option value="5">+18 anos</option>
//                     </select>
//                 </div>
//             </div>

//             <div className={style.corpo}>
//                 <h1>Filmes</h1>
//                 <div className={style.filmes}>
//                     {movies.map((movie) => (
//                         <CardFilme key={movie.movieId} movie={movie} />
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

