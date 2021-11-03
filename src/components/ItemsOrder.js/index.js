import React from 'react'
import ItemOrder from '../ItemOrder'


export default function ItemsOrder({ carrito, eliminarProCarrito }) {


    return (
        <>
            {
                carrito.map((item) => <ItemOrder item={item} eliminarProCarrito={eliminarProCarrito} />
                )
            }
        </>

    )
}