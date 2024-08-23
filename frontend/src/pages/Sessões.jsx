import React, { useState, useEffect } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useParams } from 'react-router-dom';
import style from "./sessões.module.css";
import { Horarios } from "../components/Horarios";



export function Sessões() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://localhost:3000/movies/${id}`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Erro ao buscar o filme:", error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <p>Carregando...</p>; 
    }

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

    const cidades = ['Niterói, RJ', 'Nova Iguaçu, RJ', 'Rio de Janeiro, RJ', 'São Gonçalo, RJ', 'Petrópolis, RJ'];
    const bairros = {
        'Niterói, RJ': ['Viradouro', 'Barreto', 'Badu', 'Muriqui'],
        'Nova Iguaçu, RJ': ['Centro', 'Rosa dos Ventos', 'Comendador Soares'],
        'Rio de Janeiro, RJ': ['Botafogo', 'Leblon', 'Campo Grande'],
        'São Gonçalo, RJ': ['Trindade', 'Rocha', 'Salgueiro'],
        'Petrópolis, RJ': ['Moinho Preto', 'Vila Manzini', '24 de Maio']
    };

    return (
        <>
            <Header />
            <div className={style.banner}>
                <img src={movie.imageUrl} className={style.capadofilme} alt={movie.title} />
                <div className={style.informacoes}>
                    <div className={style.dadosfilme}>
                        <div className={style.topo}>
                            <h1>{movie.title}</h1>
                            <img src={getRatingImage(movie.rating)} className={style.idade} />
                        </div>
                        <h2>{movie.genre}</h2>
                        <p>{movie.synopsis}</p>
                    </div>
                    <div className={style.lugar}>
                        <select className={style.filter} name="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}>
                            <option disabled value="">Cidade</option>
                            {cidades.map((cidade) => (
                                <option key={cidade} value={cidade}>
                                    {cidade}
                                </option>
                            ))}
                        </select>
                        <select className={style.filter} name="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} disabled={!cidade}>
                            <option disabled value="">Bairro</option>
                            {cidade && bairros[cidade].map((bairro) => (
                                <option key={bairro} value={bairro}>
                                    {bairro}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <Horarios key={movie.movieId} movie={movie} />
            <Footer />
        </>
    );
}

