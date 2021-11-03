import React from 'react'
import Layout from '../../components/Layout'
import styles from './favorites.module.scss'

export default function FavoritesPage() {
    return (
        <Layout noLogo>
            <div className={styles.container}>
                <h3>Estamos en espera de mas corazones de nuestros clientes para hacer el top</h3>
            </div>
        </Layout>
    )
}