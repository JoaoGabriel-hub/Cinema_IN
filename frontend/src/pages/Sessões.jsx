import React, { useState } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";
import style from "./sessões.module.css";
import { Horarios } from "../components/Horarios";

export function Sessões() {
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');

    const cidades = ['Niterói, RJ', 'Nova Iguaçu, RJ', 'Rio de Janeiro, RJ', 'São Gonçalo, RJ', 'Petrópolis, RJ'];
    const bairros = {
        'Niterói, RJ': ['Viradouro','Barreato', 'Badu', 'Muriqui'],
        'Nova Iguaçu, RJ': ['Centro', 'Rosa dos Ventos', 'Comendador Soares'],
        'Rio de Janeiro, RJ': ['Botafogo', 'Leblon', 'Campo Grande'],
        'São Gonçalo, RJ': ['Trindade','Rocha', 'Salgueiro'],
        'Petrópolis, RJ': ['Moinho Preto','Vila Manzini', '24 de Maio']
    };

    return (
        <>
            <Header />
            <div className={style.banner}>
                <img src="o" className={style.capadofilme} />
                <div className={style.informacoes}>
                    <div className={style.dadosfilme}>
                        <div className={style.topo}>
                            <h1>Nome do Filme</h1>
                            <img src="s" className={style.idade} />
                        </div>
                        <h2>Estilos do filme</h2>
                        <p>
                            Resumo do filme suuuuuper legal! É sério!
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Hic adipisci sunt eveniet 
                            aliquam odio est, debitis reprehenderit alias 
                            officiis ut magnam necessitatibus dolor et ea 
                            ullam cum ab vel vero?
                        </p>
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
            <Horarios />
            <Footer />
        </>
    );
}
