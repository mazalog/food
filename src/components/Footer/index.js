import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {

    return (
        <div className={styles.container} style={{ background: '#554473' }}>
            <footer className={styles.container__Footer}>
                <div>
                    <h4>CaracasBurguer</h4>
                    <p className={styles.text}>
                        Copyright 2021 © CaracasBurguer. All rights reserved.
                    </p>
                    <div className={styles.addres}>
                        <div>
                            <h4>Ubicación en Plaza Venezuela</h4>
                            <p className={styles.text}>
                                Frente al Seniat y la Fuente
                            </p>
                        </div>
                        <div>
                            <h4>Ubicación en el Paraiso</h4>
                            <p className={styles.text}>
                                Frente a la iglesia Coromoto, al lado de crema paraiso
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 style={{ fontSize: '13px' }}>HECHO POR  @MAZA_VE</h6>
                </div>
            </footer>

        </div>
    )
}