import React from 'react'
import styles from './navB.module.scss'


export default function NextBtn({ sectionCart, subTotal, addOrder, setSectionCart, inCard, updatePageCart }) {

    const handleClick = () => {

        if (sectionCart === 'order') {
            if (inCard.length !== 0) {
                setSectionCart('checkout')
            } else {
                console.log('cart empty')
            }
        } else {

            updatePageCart('confirm')
        }
    }
    return (
        <div className={styles.containerNavBottom}>
            <div className={styles.navBottom} >
                {
                    sectionCart === 'confirm' ? <>

                        <div onClick={addOrder} className={styles.checkout__Button}>Finalizar Pedido</div >


                    </> : <>
                        <div className={styles.container__SubTotal__Text}>
                            <div className={styles.subtotal__Text}>TOTAL</div>
                            <div className={styles.Subtotal__Price__Text}>${subTotal.toFixed(2)}</div>
                        </div>
                        <div onClick={handleClick} className={styles.checkout__Button}>Siguiente</div>
                    </>
                }

            </div>
        </div>
    )
}

