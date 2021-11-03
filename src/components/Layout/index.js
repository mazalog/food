import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import NavBottom from '../NavBottom'
import styles from './layout.module.scss'

export default function Layout({ children, noLogo }) {
    const [displayCart, setDisplayCart] = useState({})
    return (
        <div className={styles.container} >
            <main className={styles.main}>
                <Header noLogo={noLogo} displayCart={displayCart} setDisplayCart={setDisplayCart} />
                {children}
                <NavBottom displayCart={displayCart} setDisplayCart={setDisplayCart} />
                <Footer />
            </main>
            <div className={styles.pc}>
                <h2>CaracasBurguer</h2>
                <h3>Trabajando en version para escritorio 💻</h3>
            </div>
        </div>
    )
}