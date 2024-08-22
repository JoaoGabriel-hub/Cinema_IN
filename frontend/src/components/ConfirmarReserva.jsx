import React, { useState } from 'react';
import style from "./confirmarreserva.module.css";
import { NavLink } from 'react-router-dom';

export default function ConfirmarReserva() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className={style.buttonconfirm}>
        CONFIRMAR
      </button>

      {modal && (
        <div className={style.modal}>
          <div className={style.overlay}></div>
          <div className={style.content}>
            <NavLink to='/'>
              <button onClick={toggleModal} className={style.close}>
                <img src="src/assets/BotaoVerde.svg" alt="Botão de confirmação" />
              </button>
            </NavLink>
            <div className={style.text}>
              <h1>Reserva Confirmada!</h1>
              <h2 className={style.texth2}>
                Sua reserva foi confirmada 
                com sucesso para a sessão selecionada.
              </h2>
              <p>
                Estamos felizes em tê-lo conosco para essa 
                experiência cinematográfica. Prepare-se para 
                se envolver em uma jornada emocionante na tela 
                grande!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
