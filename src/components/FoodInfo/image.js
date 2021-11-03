import React from 'react'
import styles from './style.module.scss'

export default function Image({ src, id }) {

    const animation = true
    return (
        <img
            src={src}
            className={`${styles.photoShown} ${animation && styles.startAnimation
                }`}
            alt="spin"
            loading="lazy"
        // style={{ opacity: ((index % 5) + 5) % 5 === id ? 1 : 0 }}
        />
    )
}