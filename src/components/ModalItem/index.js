import React from "react"
import styles from "./modalItem.module.scss"

export default function ModalItem({ deleteRecicle, add, icon, name, deleteIngredient, addRecicle }) {

    const deleteIngre = (item) => {
        deleteIngredient(item)
        addRecicle(item)
    }
    return (
        <div className={styles.container}>
            <li
                className={styles.categoryItem}
            >
                <a>
                    {icon}
                    <span className={styles.categoryName}>{name}</span>
                </a>
            </li>
            {
                add ? <button
                    className={styles.btnRemove}
                    style={{ color: '#fff' }}
                    onClick={() => deleteRecicle(name)}
                >+</button> : <button onClick={() => deleteIngre(name)} className={styles.btnRemove} >x</button>
            }
        </div>

    )
}