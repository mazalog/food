import React from 'react'
import styles from './itemOrder.module.scss'

export default function ItemOrder({ item, eliminarProCarrito }) {


    const ingredientes = []

    item.information.forEach((doc) => {
        ingredientes.push(
            JSON.stringify(
                ` sin ${doc}`
            ).replace(/['"]+/g, '')
        )
    })
    return (
        <div className={styles.containerContent} key={item.id}>
            <span className={styles.name}>{item.name} {ingredientes.toString()}</span>
            <div className={styles.containerClose} onClick={() => eliminarProCarrito(item)}>X</div>
            <span className={styles.count}>${item.precio} X {item.cantidad}</span>
        </div>
    )
};
