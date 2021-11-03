import React from "react"
import { useLocation } from "wouter"
import BurguerIcon from "../Icons/BurguerIcon"
import ExtraIcon from "../Icons/Extra"
import HotDogIcon from "../Icons/HotDogIcon"
import PepitoIcon from "../Icons/PepitoIcon"
import styles from "./categories.module.scss"

const CategoryItem = (props) => {

  const [, navigate] = useLocation()
  return (
    <>

      <li
        className={styles.categoryItem}
        onClick={() => navigate(props.href)}
        style={{ background: `${props.filter}`, color: `${props.filter === '#000' ? '#f1f1f1' : '#000'}` }}
      >
        <a>
          {props.emoji}
          <span className={styles.categoryName}>{props.name}</span>
        </a>
      </li>

    </>
  )
}

export default function CategoriesBar(props) {

  return (
    <div className={styles.container}>
      <h4 className={styles.titleCategories}>¿Que buscas?</h4>
      <ul className={styles.categories}>
        <CategoryItem
          name="Burgers"
          filter={props.filters === 'Burgers' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          emoji={<BurguerIcon />}
          href="/categorie/hamburguesas"
        />
        <CategoryItem
          name="Pepitos"
          emoji={<PepitoIcon />}
          filter={props.filters === 'Pepitos' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          href="/categorie/pepitos"
        />
        <CategoryItem
          name="Perros"
          emoji={<HotDogIcon />}
          filter={props.filters === 'Perros' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          href="/categorie/perros"
        />
        <CategoryItem
          name="Extras"
          emoji={<ExtraIcon />}
          filter={props.filters === 'Extras' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          href="/categorie/extras"
        />
      </ul>
      <ul className={styles.categoriesMd}>
        <CategoryItem
          name="Burgers"
          filter={props.filters === 'Burgers' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          emoji="🍔"
          href="/categorie/hamburguesas"
        />
        <CategoryItem
          name="Pepitos"
          emoji="🍔"
          filter={props.filters === 'Pepitos' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          href="/categorie/pepitos"
        />
        <CategoryItem
          name="Perros"
          emoji="🍔"
          filter={props.filters === 'Perros' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          href="/categorie/perros"
        />
        <CategoryItem
          name="Extras"
          emoji="🍔"
          filter={props.filters === 'Extras' ? '#000' : '#f1f1f1'}
          categorie={props.categorie}
          href="/categorie/extras"
        />
      </ul>
      <div className={styles.helpContainer} >
        <div className={styles.helpIcon}>
        </div>
      </div>
    </div >
  )
}

