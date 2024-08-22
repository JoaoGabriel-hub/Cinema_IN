import { useState } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import styles from "./checkout.module.css";
import Assentos from "../components/Assentos";
import Confirmacao from '../components/Confirmação'; // Importa o componente Confirmacao

export function Checkout() {
    const location = useLocation();
    const { hora, tipoTela } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatInfo, setSeatInfo] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    const handleSeatSelect = (seatId, isSelected) => {
        setSelectedSeats((prevSeats) =>
            isSelected ? [...prevSeats, seatId] : prevSeats.filter((seat) => seat !== seatId)
        );
        if (isSelected) {
            setSeatInfo((prevInfo) => ({
                ...prevInfo,
                [seatId]: { name: '', cpf: '' }
            }));
        } else {
            setSeatInfo((prevInfo) => {
                const newInfo = { ...prevInfo };
                delete newInfo[seatId];
                return newInfo;
            });
        }
    };

    const handleInputChange = (seatId, event) => {
        const { name, value } = event.target;
        setSeatInfo((prevInfo) => ({
            ...prevInfo,
            [seatId]: { ...prevInfo[seatId], [name]: value }
        }));
        validateForm();
    };
    

    const validateForm = () => {
        const isValid = selectedSeats.every(seatId => {
            const info = seatInfo[seatId];
            return info && info.name && info.cpf;
        });
        setIsFormValid(isValid);
    };

    const handleConfirmClick = () => {
        if (isFormValid) {
            console.log("Formulário válido e confirmado!");
            setIsModalOpen(true); // Abre o modal quando o botão é clicado
        } else {
            alert("Preencha todos os campos obrigatórios!");
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Fecha o modal
    };

    useEffect(() => {
        validateForm();
    }, [selectedSeats, seatInfo]);

    return (
        <>
            <Header />
            <div className={styles.pagina}>
                <div className={styles.asideassentos}>
                    {hora && tipoTela ? (
                        <div>
                            <div className={styles.filme}>
                                <img src="w" className={styles.imgfilme} />
                                <div className={styles.dadossessao}>
                                    <h3>Nome do Filme</h3>
                                    <div>
                                        <div className={styles.tiposessao}>{tipoTela}</div>
                                        <div className={styles.tiposessao}>{hora}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fundoassentos}>
                                <div>
                                    <img src="src/assets/Icone-Assento.svg" />
                                    <h2>ASSENTOS ESCOLHIDOS</h2>
                                </div>
                                <div className={styles.lugares}>
                                    {selectedSeats.length > 0 && selectedSeats.map((seatId) => (
                                        <div key={seatId} className={styles.assentos}>
                                            <h2>{seatId}</h2>
                                            <div></div>
                                            <p>Nome</p>
                                            <input
                                                type="text"
                                                name="name"
                                                value={seatInfo[seatId]?.name || ''}
                                                onChange={(e) => handleInputChange(seatId, e)}
                                                className={styles.userInfo}
                                                required
                                            />
                                            <p>CPF</p>
                                            <input
                                                type="text"
                                                name="cpf"
                                                value={seatInfo[seatId]?.cpf || ''}
                                                onChange={(e) => handleInputChange(seatId, e)}
                                                className={styles.userInfo}
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button onClick={handleConfirmClick} disabled={!isFormValid} className={styles.botaoconfirma}>
                                     CONFIRMAR 
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p>Erro!</p>
                    )}
                </div>
                
                <Assentos onSeatSelect={handleSeatSelect} />
            </div>
            <Footer />

            {/* Adiciona o componente de confirmação com a lógica de abertura e fechamento */}
            {isModalOpen && <Confirmacao onClose={handleModalClose} />}
        </>
    );
}

