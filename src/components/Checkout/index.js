import React from 'react'
import styles from './checkOut.module.scss'

export default function Checkout({ handleInputChange, typeSend, setTypeSend, values }) {
    return (
        <div className={styles.containerCheckout}>
            <h2 className={styles.titleCheckout}>Tipo de pedido</h2>
            <div className={styles.typesSend}>
                <p className={`${styles.typeSend} ${typeSend === 'Delivery' ? styles.typeSendActive : ' '}`} onClick={() => setTypeSend('Delivery')}>Delivery</p>
                <p className={`${styles.typeSend} ${typeSend === 'Recoger' ? styles.typeSendActive : ' '}`} onClick={() => setTypeSend('Recoger')}>Recoger</p>
            </div>
            <form>
                <h2 className={styles.titleCheckout}>Datos</h2>
                <div className={styles.data}>
                    <label className={styles.label}>Nombre</label>
                    <input value={values.name} onChange={handleInputChange} className={styles.input} name="name" />
                    <label className={styles.label}>Telefono</label>
                    <input value={values.phone === 0 ? '' : values.phone} onChange={handleInputChange} className={styles.input} name="phone" />
                    <label className={styles.label}>Observaciones</label>
                    <textarea onChange={handleInputChange} className={styles.input} style={{ height: '70px' }}
                        placeholder="Ejemplo. Poco tomate"
                        name="observation" />
                </div>

                {
                    typeSend === 'Delivery' ? <>
                        <h2 className={styles.titleCheckout}>Dirección de envio</h2>
                        <div className={styles.data}>
                            <label className={styles.label}>Dirección</label>
                            <input value={values.direction} onChange={handleInputChange} className={styles.input} name="direction" />
                            <label className={styles.label}>Localidad</label>
                            <select values={values.localDirection} onChange={handleInputChange} className={styles.select} name="localDirection">
                                <option value="">Seleccionar</option>
                                <option value="Palo Verde">Palo verde $4.00</option>
                                <option value="California">California $3.00</option>
                                <option value="Los Cortijos">Los Cortijos $3.00</option>
                            </select>
                        </div>
                    </> : <></>
                }
                <h2 className={styles.titleCheckout}>Forma de Pago</h2>
                <div className={styles.data}>
                    <label className={styles.label}>Metodo de Pago</label>
                    <select value={values.method} onChange={handleInputChange} className={styles.select} name="method">
                        <option value="">Seleccionar</option>
                        <option value="Efectivo">Efectivo </option>
                        <option value="Transferencia bancaria">Transferencia Bancaria</option>
                        <option value="Pago movil">Pago Movil</option>
                    </select>
                </div>
            </form>
        </div>)
}