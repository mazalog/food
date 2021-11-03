import React from 'react'
import styles from './confirm.module.scss'
import './confirm.css'

export default function Confirm({ values, typeSend, zones, nPrecio, cart }) {

    const handleClick = (e) => {
        e.currentTarget.classList.toggle('active')
        const response = e.currentTarget.querySelector('.response')
        const heightReal = response.scrollHeight
        if (!response.style.maxHeight) {
            response.style.maxHeight = heightReal + 'px'
        } else {
            response.style.maxHeight = null
        }
    }



    const priceDelivery = zones.find(zone => zone.addres === values.localDirection)

    console.log(values)

    const total = nPrecio + (typeSend === 'Recoger' ? 0 : priceDelivery.price)

    return (
        <div className="containerConfirm">

            <p className="titleConfirm">Resumen del pedido</p>
            <div className="containerDataOrder">
                <p className="left">{values.name}</p>
                <p className="left">{values.phone}</p>
                <div className="containerDetail">
                    <div className="rowDetail">
                        <p className="left">Tipo de pedido</p>
                        <p className="right">{typeSend === 'Recoger' ? 'Recorger en local' : 'Delivery'}</p>
                    </div>
                    <div className="rowDetail">
                        <p className="left">Subtotal</p>
                        <p className="right">${nPrecio.toFixed(2)}</p>
                    </div>
                    {
                        typeSend === 'delivery' ? <div className={styles.rowDetail}>
                            <p className="left">Delivery</p>
                            <p className="right">${priceDelivery.price.toFixed(2)}</p></div> : <></>
                    }
                    <div className="rowDetail">
                        <p className="left">Total</p>
                        <p className="right">${total.toFixed(2)}</p>
                    </div>
                </div>
                <div className="containerDetail">
                    <div className="rowDetail">
                        <p className="left">Metodo de pago</p>
                        <p className="right">{values.metodoPago}</p>
                    </div>
                    <div className="note">
                        <span>Nota: Confirme los detalles de su pedido antes de finalizar</span>
                    </div>
                    <div className="containerDetailOrder" onClick={(e) => handleClick(e)}>
                        <p className="left order"> Items del pedido <b>+</b> </p>
                        <div className="response">
                            {
                                cart.map(doc =>
                                    <div className="rowDetail">
                                        <p className="left">{doc.name}</p>
                                        <p className="right">{doc.cantidad} X ${doc.precio} </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        typeSend === 'Delivery' ? <>
                            <div className="containerDetailOrder" onClick={(e) => handleClick(e)}>
                                <p className="left order"> Dirección <b>+</b></p>
                                <div className="response">
                                    <div className="rowDetail">
                                        <p className="left">Dirección</p>
                                        <p className="right">{values.direction}</p>
                                    </div>
                                    <div className="rowDetail">
                                        <p className="left">Localidad</p>
                                        <p className="right">{values.localDirection}</p>
                                    </div>
                                </div>
                            </div>
                        </> : <></>
                    }

                </div>
            </div>
        </div >
    )
}