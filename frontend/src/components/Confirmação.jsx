import React, { useState, useEffect } from 'react';
import style from "./confirmacao.module.css";

export default function Confirmacao() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  return (
    <div>
      <button onClick={toggleModal} className={style.open}>
        CONFIRMAR
      </button>
  
      {modal && (
        <div className={style.modal}>
          <div className={style.overlay}></div>
          <div className={style.content}>
            <div className={style.text}>
              <h1>Confirmação de Reserva!</h1>
              <h2>Tem certeza de que deseja confirmar a reserva?</h2>
            </div>
            <div className={style.buttons}>
              <button onClick={toggleModal} className={style.close}>
                CANCELAR
              </button>
              <button className={style.confirm}>
                CONFIRMAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}
