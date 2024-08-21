import { useState } from 'react';
import styles from "./assentos.module.css";

export default function Assentos({ onSeatSelect }) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const seatsPerRow = 18;

    const handleSeatChange = (event) => {
        const seatId = event.target.value;
        onSeatSelect(seatId, event.target.checked);
    };

    return (
        <section className={styles.cinema}>
            <img src="src/assets/Tela.svg" alt="Tela" />
            <div className={styles.seats}>
                <p>
                    A<br/>
                    B<br/>
                    C<br/>
                    D<br/>
                    E<br/>
                    F<br/>
                    G<br/>
                    H<br/>
                    I<br/>
                    J
                </p>
                <div className={styles.seatContainer}>
                    {rows.map((row) => (
                        <div key={row} className={styles.seatRow}>
                            {Array.from({ length: seatsPerRow }, (_, index) => {
                                const seatId = `${row}${index + 1}`;
                                return (
                                    <label key={seatId} className={styles.seatLabel}>
                                        <input
                                            type='checkbox'
                                            value={seatId}
                                            className={styles.seatButton}
                                            onChange={handleSeatChange}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <p>
                    A<br/>
                    B<br/>
                    C<br/>
                    D<br/>
                    E<br/>
                    F<br/>
                    G<br/>
                    H<br/>
                    I<br/>
                    J
                </p>
            </div>
            <div className={styles.caption}>
                <div></div>
                <h3>LEGENDA</h3>
                <img src="/src/assets/Legenda.svg" alt="Legenda" />
            </div>
        </section>
    );
}
