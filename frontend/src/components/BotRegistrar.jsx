import React, { useState } from 'react';
import style from "./botregistrar.module.css";
import { NavLink } from "react-router-dom";

export default function BotRegistrar({ onClick, formValues, disabled }) {
    const [modal] = useState(true);

    return (
        <div>
            {modal && (
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
        </div>
    );
}

