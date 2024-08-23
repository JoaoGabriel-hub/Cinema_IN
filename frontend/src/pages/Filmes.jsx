import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardFilme } from "../components/CardFilme";
import style from "./filmes.module.css";

export function Filmes() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 6;

    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Erro ao buscar filmes:", error));
    }, []);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        setCurrentPage(1);
    };

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredMovies = movies.filter(movie => {
        return (
            (selectedGenre === '' || movie.genre.includes(selectedGenre)) &&
            (selectedRating === '' || movie.rating == selectedRating) &&
            (searchTerm === '' || movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const renderPagination = () => {
        const pages = [];
        let startPage, endPage;
    
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else if (currentPage <= 2) {
            startPage = 1;
            endPage = 4;
        } else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - 3;
            endPage = totalPages;
        } else {
            startPage = currentPage;
            endPage = currentPage;
        }
    
        if (startPage > 1) {
            pages.push(
                <button className={style.prev} key="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <img src="/src/assets/Anterior.svg" alt="Anterior" />
                </button>,
                <button key="1" onClick={() => handlePageChange(1)} className={currentPage === 1 ? style.active : ''} disabled={currentPage === 1}>1</button>
            );
            
            if (startPage > 2) {
                pages.push(<span key="start-ellipsis">...</span>);
            }
        }
    
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? style.active : ''} disabled={currentPage === i}>
                    {i}
                </button>
            );
        }
    
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="end-ellipsis">...</span>);
            }
            pages.push(
                <button key={totalPages} onClick={() => handlePageChange(totalPages)} className={currentPage === totalPages ? style.active : ''} disabled={currentPage === totalPages}>
                    {totalPages}
                </button>,
                <button className={style.prox} key="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <img src="/src/assets/Prox.svg" alt="Próximo" />
                </button>
            );
        }
    
        return pages;
    };
    
    
    

    return (
        <>
            <Header />
            <div className={style.pesquisafundo}>
                <div className={style.pesquisa}>
                    <input
                        className={style.barra}
                        type="text" 
                        placeholder="Pesquisar filmes"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className={style.botaopesquisa}>
                        <img src="src/assets/Botao-Pesquisa.svg" alt="Pesquisar" />
                    </button>
                </div>
                <div className={style.filtros}>
                    <select
                        className={style.filter}
                        name="Gênero"
                        onChange={handleGenreChange}
                        value={selectedGenre}
                    >
                        <option value="">Gênero</option>
                        <option value="Action">Ação</option>
                        <option value="Adventure">Aventura</option>
                        <option value="Animation">Animação</option>
                        <option value="Comedy">Comédia</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasia</option>
                    </select>
                    <select
                        className={style.filter}
                        name="Classificação"
                        onChange={handleRatingChange}
                        value={selectedRating}
                    >
                        <option value="">Classificação</option>
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
                    {renderPagination()}
                </div>
            </div>
            <Footer />
        </>
    );
}



