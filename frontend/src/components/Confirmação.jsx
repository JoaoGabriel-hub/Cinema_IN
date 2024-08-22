import React, { useState, useEffect } from 'react';
import style from "./confirmacao.module.css";
import { NavLink } from 'react-router-dom';

export default function Confirmacao({ onClose }) {
  const [modal, setModal] = useState(true); // Modal inicial aberto
  const [secondModal, setSecondModal] = useState(false); // Segundo modal inicialmente fechado

  useEffect(() => {
    if (modal || secondModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal, secondModal]);

  const handleConfirmClick = () => {
    setModal(false); // Fecha o primeiro modal
    setSecondModal(true); // Abre o segundo modal
  };

  return (
    <div>
      {modal && (
        <div className={style.modal}>
          <div className={style.overlay} onClick={onClose}></div>
          <div className={style.content}>
            <div className={style.text}>
              <h1>Confirmação de Reserva!</h1>
              <h2>Tem certeza de que deseja confirmar a reserva?</h2>
            </div>
            <div className={style.buttons}>
              <button onClick={onClose} className={style.close}>
                CANCELAR
              </button>
              <button onClick={handleConfirmClick} className={style.confirm}>
                CONFIRMAR
              </button>
            </div>
          </div>
        </div>
      )}

      {secondModal && (
        <div className={style.modal}>
          <div className={style.overlay} onClick={() => setSecondModal(false)}></div>
          <div className={style.secondcontent}>
            <div className={style.secondtext}>
              <NavLink to='/'>
                <button onClick={() => setSecondModal(false)} className={style.secondconfirm}>
                  <img src="src/assets/Botao-Confirma.svg" alt="Fechar" />
                </button>           
              </NavLink>
              <h1>Reserva Confirmada!</h1>
              <h2>Sua reserva foi confirmada com sucesso para a sessão selecionada.</h2>
              <p>Estamos felizes em tê-lo conosco para essa experiência cinematográfica. Prepare-se para se envolver em uma jornada emocionante na tela grande!</p>
            </div>            
          </div>
        </div>
      )}
    </div>
  );
}


