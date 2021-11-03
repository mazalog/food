import React, { useState } from 'react'
import { useCarrito } from '../../hooks/cart.hook'
import styles from './contentCart.module.scss'
import ItemsOrder from '../ItemsOrder.js'
import Checkout from '../Checkout'
import Confirm from '../Confirm'
import Subtotal from '../SubTotal'
import NextBtn from '../NextBtn'

export default function ContentCart() {

    const { carrito, nPrecio, eliminarProCarrito, vaciarCarrito } = useCarrito()

    const [action, setAction] = useState({})

    const [pageCart, setPageCart] = useState('order')

    const zones = [
        { addres: 'Palo Verde', price: 3 },
        { addres: 'California', price: 3 },
        { addres: 'Los Cortijos', price: 3 }

    ]
    const [typeSend, setTypeSend] = useState('Delivery')

    const initialValues = {
        name: '',
        phone: 0,
        direction: '',
        method: '',
        observation: '',
        localDirection: '',
    }
    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const updatePageCart = (r) => {
        if (pageCart === 'order') {
            if (carrito.length !== 0) {
                setPageCart('checkout')
            }
        } else if (pageCart === "checkout") {
            if (r !== 'confirm') {
                setPageCart('order')
            } else {
                if (typeSend === 'Delivery') {
                    if (values.name === '') return setAction({ error: 'Complete el campo.' })
                    if (values.phone === '') return setAction({ error: 'Complete el campo.' })
                    if (values.direction === '') return setAction({ error: 'Complete el campo.' })
                    if (values.localDirection === '') return setAction({ error: 'Complete el campo.' })
                    if (values.method === '') return setAction({ error: 'Complete el campo.' })
                } else {
                    if (values.name === '') return setAction({ error: 'Complete el campo.' })
                    if (values.phone === '') return setAction({ error: 'Complete el campo.' })
                    if (values.method === '') return setAction({ error: 'Complete el campo.' })
                }
                setPageCart('confirm')
            }

        } else if (pageCart === 'confirm') {
            if (r === 'checkout') {
                if (carrito.length !== 0) {
                    setPageCart('checkout')
                } else {
                    setPageCart('order')
                }
            }
            if (r === 'order') {
                setPageCart('order')
            }
        } else if (pageCart === 'successOrder') {

        }
    }

    const sendWhatsapp = () => {

        const priceDelivery = typeSend === 'Delivery' ? zones.find(zone => zone.addres === values.localDirection).price : 0

        const cart = []

        carrito.forEach((doc) => {

            const ingredientes = []

            doc.information.forEach((doc) => {
                ingredientes.push(
                    JSON.stringify(
                        ` sin ${doc}`
                    ).replace(/['"]+/g, '')
                )
            })

            cart.push(
                JSON.stringify(
                    `${doc.name} ${ingredientes.toString()} $${doc.precio} x ${doc.cantidad} unidad(des)%0A`
                ).replace(/['"]+/g, '')
            )
        })

        window.open(`https://api.whatsapp.com/send?phone=+5804242790671
        &text=Hola+CaracasBurger+mi+nombre+es+${values.name}
            %0A+Requiero+este+pedido:%0A${cart.toString()}+%0A
            Observación:+${values.observation}+%0A
            Tipo+de+compra:+${typeSend === 'Delivery' ? 'Delivery' :
                'Recoger+personalmente'}%0A${typeSend === 'Delivery' ? ('Dirección+de+entrega:+' + values.direction +
                    '%0ALocalidad:+' + values.localDirection + '%0ASubtotal:+$' + nPrecio) : ''}%0A
                    Costo+delivery:+$${priceDelivery}
                    %0ATotal:+$${nPrecio + priceDelivery}
                    %0AMetodo+de+Pago:+${values.method}
            `)
        vaciarCarrito()

    }

    return (
        <div>
            <div className={styles.btnCart}>
                <div className={`${styles.actionCart} ${pageCart === 'order' ? styles.actionActive : styles.actionDesactive} `} onClick={() => updatePageCart('order')}><p>Orden</p></div>
                <div className={`${styles.actionCart} ${pageCart === 'checkout' ? styles.actionActive : styles.actionDesactive} `} onClick={() => updatePageCart('checkout')}><p>Checkout</p></div>
                <div className={`${styles.actionCart} ${pageCart === 'confirm' ? styles.actionActive : styles.actionDesactive} `} onClick={() => updatePageCart('confirm')}><p>Confirmar</p></div>
            </div>
            <div className={styles.containerPagesCart}>
                {
                    pageCart === 'order' ?
                        <div className={styles.items}>
                            <ItemsOrder carrito={carrito} eliminarProCarrito={eliminarProCarrito} />
                            {/* <div className={styles.total}>
                                <h5>Total ${nPrecio}</h5>
                            </div> */}
                        </div> : pageCart === 'checkout' ?
                            <Checkout
                                handleInputChange={handleInputChange}
                                typeSend={typeSend}
                                values={values}
                                setTypeSend={setTypeSend}
                            /> : pageCart === 'confirm' ?
                                <>
                                    <Confirm
                                        zones={zones}
                                        cart={carrito}
                                        typeSend={typeSend}
                                        nPrecio={nPrecio}
                                        values={values}
                                        sendWhatsapp={sendWhatsapp}
                                    />
                                </>
                                : <></>
                }
            </div>
            <Subtotal
                subTotal={nPrecio}
                addOrder={sendWhatsapp}
                setSectionCart={setPageCart}
                updatePageCart={updatePageCart}
                inCard={carrito}
                sectionCart={pageCart}

            />
            {/* <NextBtn
                            subTotal={nPrecio}
                            addOrder={sendWhatsapp}
                            setSectionCart={setPageCart}
                            updatePageCart={updatePageCart}
                            inCard={carrito}
                            sectionCart={pageCart} 
            
            /> */}
        </div>
    )
}