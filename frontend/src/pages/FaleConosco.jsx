import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import style from "./faleconosco.module.css";
import Aviso from "../components/Aviso";

export function FaleConosco() {
    const [formValues, setFormValues] = useState({
        nomeCompleto: '',
        assunto: '',
        descricaoDetalhada: ''
    });
    
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const allFieldsFilled = Object.values(formValues).every(value => value.trim() !== '');
        setIsFormValid(allFieldsFilled);
    }, [formValues]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    return (
        <>
            <Header />
            <div className={style.contato}>
                <h1>Contato</h1>
                <h2>Encontrou algum problema? Envie uma mensagem!</h2>
                <input
                    type="text"
                    className={style.input}
                    placeholder="Nome Completo"
                    name="nomeCompleto"
                    value={formValues.nomeCompleto}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    className={style.input}
                    placeholder="Assunto"
                    name="assunto"
                    value={formValues.assunto}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    type="text"
                    rows={5}
                    className={style.inputdetalhado}
                    placeholder="Descrição Detalhada"
                    name="descricaoDetalhada"
                    value={formValues.descricaoDetalhada}
                    onChange={handleInputChange}
                    required
                />
                {isFormValid && <Aviso />}
            </div>
            <Footer />
        </>
    );
}
