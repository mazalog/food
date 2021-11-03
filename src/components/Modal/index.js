import React from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.scss'
import close from "../../assets/images/close.svg";



function Modal({ children, onClose }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.containerImg}>
                    <img onClick={onClose} className={styles.img} alt="Close Modal" src={close} />
                </div>
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default function ModalPortal({ children, onClose }) {
    return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById('modal-root'))
}