import React, { useState } from 'react';
import style from "./aviso.module.css"

export default function Aviso() {
   
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <div>

        <button onClick={toggleModal} className={style.open}>ENVIAR</button>
      
      {modal &&(
            <div className={style.modal}>
                <div className={style.overlay}></div>
                <div className={style.content}>
                <button onClick={toggleModal} className={style.close}>
                    <img src="src/assets/Botao.svg"/>
                </button>
                    <div className={style.text}>
                        <h1>Mensagem Enviada!</h1>
                        <h2>Obrigada por compartilhar suas observações conosco.</h2>
                        <p>
                            Sua contribuição é fundamental para melhorarmos continuamente 
                            a sua experiência em nosso site. Valorizamos seu tempo e dedicação 
                            ao relatar esse problema.
                        </p>
                    </div>
                    
                </div>
            </div>
      )}
        
    </div>
  );
  }