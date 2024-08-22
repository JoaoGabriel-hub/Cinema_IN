import React, { useState, useEffect } from 'react'; 
import { Header } from "../components/Header"; 
import { Footer } from "../components/Footer"; 
import style from "./registrar.module.css"; 
import { NavLink } from 'react-router-dom'; // Certifique-se de importar NavLink corretamente

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
    const [isModalVisible, setIsModalVisible] = useState(false); 

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

    const handleSubmit = async () => {
        console.log("handleSubmit chamado");

        const senhaValida = /^(?=.*[!@_#])[A-Za-z\d!@_#]{7,}$/.test(formValues.senha);
        if (!senhaValida) {
            alert('A senha deve ter no mínimo 7 caracteres e incluir pelo menos um símbolo (!, @, _, #, etc).');
            return;
        }

        if (formValues.senha !== formValues.confirmarSenha) {
            alert('Senhas diferentes, por favor, digite a mesma senha.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formValues.nome,
                    lastName: formValues.sobrenome,
                    cpf: formValues.cpf,
                    birthday: formValues.dataNascimento,
                    username: formValues.nomeUsuario,
                    email: formValues.email,
                    password: formValues.senha,
                }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Usuário registrado com sucesso:', data);
                setIsModalVisible(true); // Exibe o modal após o registro bem-sucedido
            } else {
                console.log('Erro ao registrar usuário:', data.message);
                alert(`Erro: ${data.message}`);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro na requisição. Tente novamente mais tarde.');
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
                        <button onClick={handleSubmit} disabled={!isFormValid}>Registrar</button>
                    </div>
                </div>
            </div>

            {isModalVisible && (
                <div className={style.modal}>
                    <div className={style.overlay}></div>
                    <div className={style.content}>
                        <div>
                            <NavLink to='/login'>
                                <button className={style.close}>
                                    <img src="src/assets/Botao.svg" alt="Botão de fechar" />
                                </button>
                            </NavLink>
                        </div>
                        <div className={style.text}>
                            <h1>Cadastro Criado!</h1>
                            <h2>Bem-Vindo à Nossa Comunidade Cinematográfica!</h2>
                            <p>
                                Obrigado por se juntar a nós na nossa comunidade
                                cinematográfica. Sua jornada para uma experiência
                                cinematográfica única começa agora. <br /><br />
                                Você será redirecionado para página de login em instantes.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}




