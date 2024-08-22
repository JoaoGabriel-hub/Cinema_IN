import React, { useState, useEffect } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import style from "./registrar.module.css";
import BotRegistrar from "../components/BotRegistrar.jsx";

export function Registrar() {
    const [formValues, setFormValues] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        dataNascimento: '',
        nomeUsuario: '',
        email: '',
        senha: '',
        confirmarSenha: ''
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

    const handleSubmit = () => {
        if (formValues.senha !== formValues.confirmarSenha) {
            alert('Senhas diferentes, por favor, digite a mesma senha.');
        } else {
            // Lógica para registrar o usuário ou prosseguir com o envio do formulário
            console.log("Formulário enviado com sucesso!");
        }
    };

    return (
        <>
            <Header />
            <div className={style.corporegistro}>
                <div className={style.apresentacao}>
                    <h1>
                        Junte-se à Comunidade Cinematográfica! 
                        Cadastre-se Aqui!
                    </h1>
                    <h2>
                        Seja bem-vindo à nossa comunidade apaixonada 
                        pelo mundo do cinema. Ao fazer parte do nosso 
                        espaço digital, você está prestes a mergulhar 
                        em uma experiência cinematográfica única, onde a 
                        magia das telonas ganha vida com um toque moderno.<br></br>
                        Nosso formulário de cadastro é o primeiro passo para 
                        embarcar nessa jornada emocionante. Ao preenchê-lo, 
                        você se tornará um membro da nossa comunidade, onde 
                        amantes do cinema se reúnem para compartilhar o 
                        entusiasmo, as emoções e as histórias que permeiam 
                        cada cena.
                    </h2>
                </div>
                
                <div className={style.formulario}>
                    <h1>Registre-se</h1>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        name="nome"
                        value={formValues.nome}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Sobrenome" 
                        name="sobrenome"
                        value={formValues.sobrenome}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="CPF" 
                        name="cpf"  
                        value={formValues.cpf}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="date" 
                        placeholder="Data de nascimento" 
                        name="dataNascimento"
                        value={formValues.dataNascimento}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Nome de Usuário" 
                        name="nomeUsuario"
                        value={formValues.nomeUsuario}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="email"
                        placeholder="E-Mail" 
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        name="senha"
                        value={formValues.senha}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Confirmar senha" 
                        name="confirmarSenha"
                        value={formValues.confirmarSenha}
                        onChange={handleInputChange}
                        required
                    />
                
                    <div className={style.botaoregistrar}>
                        <BotRegistrar onClick={handleSubmit} disabled={!isFormValid} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


