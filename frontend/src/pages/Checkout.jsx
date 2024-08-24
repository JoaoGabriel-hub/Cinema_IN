import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./checkout.module.css";
import Assentos from "../components/Assentos";
import Confirmação from '../components/Confirmação';

export function Checkout() {
    const { id } = useParams();
    const location = useLocation();
    const { hora, tipoTela } = location.state || {};

    const [movie, setMovie] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatInfo, setSeatInfo] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        if (selectedSeats.length === 0) {
            alert("Por favor, selecione pelo menos um assento!");
            return;
        }

        if (isFormValid) {
            console.log("Formulário válido e confirmado!");
            setIsModalOpen(true);
        } else {
            alert("Preencha todos os campos obrigatórios!");
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        validateForm();
    }, [selectedSeats, seatInfo]);

    const mapTipoTela = (tipo) => {
        switch(tipo) {
            case 0:
                return "2D";
            case 1:
                return "3D";
            case 2:
                return "IMAX";
            default:
                return "Desconhecido"; // Caso ocorra um valor inesperado
        }
    };

    return (
        <>
            <Header />
            <div className={styles.pagina}>
                <div className={styles.asideassentos}>
                    {movie ? (
                        <div>
                            <div className={styles.filme}>
                                <img src={movie.imageUrl} className={styles.imgfilme} alt={movie.title} />
                                <div className={styles.dadossessao}>
                                    <h3>{movie.title}</h3>
                                    <div>
                                        <div className={styles.tiposessao}>{mapTipoTela(tipoTela)}</div>
                                        <div className={styles.tiposessao}>{hora}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fundoassentos}>
                                <div>
                                    <img src="/src/assets/Icone-Assento.svg" alt="Assento" />
                                    <h2>ASSENTOS ESCOLHIDOS</h2>
                                </div>
                                <div className={styles.lugares}>
                                    {selectedSeats.length > 0 && selectedSeats.map((seatId) => (
                                        <div key={seatId} className={styles.assentos}>
                                            <h2>{seatId}</h2>
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
                                <button type='submit' onClick={handleConfirmClick} disabled={!isFormValid} className={styles.botaoconfirma}>
                                     CONFIRMAR 
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p>Erro ao carregar as informações da sessão!</p>
                    )}
                </div>

                <Assentos onSeatSelect={handleSeatSelect} />
            </div>
            <Footer />

            {isModalOpen && <Confirmação onClose={handleModalClose} />}
        </>
    );
}



