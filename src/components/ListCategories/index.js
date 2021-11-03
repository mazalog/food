import React from 'react'
import { useLocation } from "wouter"
import styles from './list.module.scss'


export default function ListCategories({ setDisplay }) {

  const [, navigate] = useLocation()

  const navegar = (url) => {
    window.screen.width > 767 ? setDisplay({}) : setDisplay({ transform: "translate3d(-100vw, 0, 0)" })
    navigate(url)
  }

  return (
    <>
      <div className={styles.headerItem} onClick={() => navegar('/favorites')}>
        Lo que mas gusta
      </div>
      <div className={styles.headerItem} onClick={() => navegar('/myfavorites')} >
        Mis favoritos
      </div>
      <div className={styles.headerItem} onClick={() => navegar('/categorie/hamburguesas')}>
        Hamburguesas
      </div>
      <div className={styles.headerItem} onClick={() => navegar('/categorie/pepitos')}>
        Pepitos
      </div>
      <div className={styles.headerItem} onClick={() => navegar('/categorie/perros')}>
        Perros
      </div>
      <div className={styles.headerItem} onClick={() => navegar('/categorie/extras')}>
        Extras
      </div>

    </>
  )
}