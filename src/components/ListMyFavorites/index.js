import React from 'react'
import { useCarrito } from '../../hooks/cart.hook'
import styles from './list.module.scss'

export default function ListMyFavorites({ favorites, isFavorite, addFavoriteOrSupr }) {
    const { addProCarrito } = useCarrito()
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Mis favoritos</h2>
            <div className={styles.elements}>
            {
                favorites.length !== 0 ? <>
                    {
                        favorites.map(doc =>
                            <div className={styles.container_row} style={{ background: doc.backgroundColor }}>
                                <div key={doc.id} className={styles.container_favorite} >
                                    <img src={doc.url} alt="favoriteFood" />
                                    <p className={styles.name} style={{ color: doc.textColor }}>{doc.name}</p>
                                    {/* <p className={styles.price}>${doc.price}</p> */}
                                </div>
                                <div className={styles.container_buttons}>
                                    <button onClick={() => addProCarrito(doc)}>Agregar a orden</button>
                                    <span onClick={() => addFavoriteOrSupr(doc)} className={styles.icon}>{isFavorite(doc)}</span>
                                </div>
                            </div>
                        )
                    }
                </> : <><h3>Aun no tienes favoritos</h3></>
            }
            </div>


        </div>
    )
}