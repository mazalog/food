import React, { useState } from "react"
import styles from "./style.module.scss"
import { useStore } from "../../hooks/store.hook";
import { useCarrito } from "../../hooks/cart.hook";
import useFavorites from "../../hooks/favorites.hook";
import { useLocation } from "wouter";
import ModalPortal from "../Modal";
import ModalItem from "../ModalItem";
import CarneIcon from "../Icons/Ingredients/CarneIcon";
import TomateIcon from "../Icons/Ingredients/TomateIcon";
import AlfalfaIcon from "../Icons/Ingredients/AlfalfaIcon";
import PepperoniIcon from "../Icons/Ingredients/Pepperoni";
import ChampiñonesIcon from "../Icons/Ingredients/ChampiñonesIcon";
import TocinetaIcon from "../Icons/Ingredients/TocinetaIcon";
import MaizIcon from "../Icons/Ingredients/MaizIcon";
import QuesoItem from "../Icons/Ingredients/QuesoItem";
import MozzarelaIcon from "../Icons/Ingredients/MozzarelaIcon";
import AceitunasNegras from "../Icons/Ingredients/AceitunasNegrasIcon";
import SalsaIcon from "../Icons/Ingredients/SalsaIcon";
import CebollaIcon from "../Icons/Ingredients/CebollaIcon";
import ChorizoIcon from "../Icons/Ingredients/ChorizoIcon";
import LechugaIcon from "../Icons/Ingredients/Lechuga";
import PapasIcon from "../Icons/Ingredients/PapasIcon";
import PepinilloIcon from "../Icons/Ingredients/Pepinillo";
import RepolloIcon from "../Icons/Ingredients/RepolloIcon";
import ChuletaIcon from "../Icons/Ingredients/ChuletaIcon";
import QuesoAmarillo from "../Icons/Ingredients/QuesoAmarillo";
import AguacateIcon from "../Icons/Ingredients/AguacateIcon";
import MilanesaIcon from "../Icons/Ingredients/MilanesaIcon";

export default function FoodInfo({ meals }) {

  const [, navigate] = useLocation()


  const index = useStore((state) => state.index);
  const indexModule = ((index % meals.length) + meals.length) % meals.length;

  const { addProCarrito } = useCarrito()
  const { addFavoriteOrSupr, isFavorite } = useFavorites()

  const [modal, setModal] = useState(false)

  const [article, setArticle] = useState({
    article: '',
    ingredients: []
  })
  const [recicle, setRecicle] = useState([])

  const icon = (i) => {
    switch (i) {
      case "Full Carne a la Parrilla":
        return <CarneIcon />
      case "Tomate":
        return <TomateIcon />
      case "Alfalfa":
        return <AlfalfaIcon />
      case "Peperoni":
        return <PepperoniIcon />
      case "Champiñones":
        return <ChampiñonesIcon />
      case "Tocineta":
        return <TocinetaIcon />
      case "Maiz":
        return <MaizIcon />
      case "Queso":
        return <QuesoItem />
      case "Mozzarela":
        return <MozzarelaIcon />
      case "Aceitunas Negras":
        return <AceitunasNegras />
      case "Full Salsa Napolitana":
        return <SalsaIcon />
      case "Carne a la parrilla":
        return <CarneIcon />
      case "Carne de hamburguesa":
        return <CarneIcon />
      case "Cebolla":
        return <CebollaIcon />
      case "Cebollas":
        return <CebollaIcon />
      case "Cebolla caramelizada":
        return <CebollaIcon />
      case "Chorizo":
        return <ChorizoIcon />
      case "Lechuga":
        return <LechugaIcon />
      case "Papitas":
        return <PapasIcon />
      case "Pepinillo":
        return <PepinilloIcon />
      case "Repollo":
        return <RepolloIcon />
      case "Chuleta":
        return <ChuletaIcon />
      case "Queso amarillo":
        return <QuesoAmarillo />
      case "Aguacate":
        return <AguacateIcon />
      case "Milanesa":
        return <MilanesaIcon />
      default:
        return ""
    }
  }

  const addRecicle = (item) => {
    setRecicle([...recicle, item])
  }

  const deleteIngredient = (id) => {
    setArticle({
      article: article.article,
      ingredients: article.ingredients.filter(item => item !== id)
    })
    addRecicle(id)
  }

  const deleteRecicle = (id) => {
    setRecicle(recicle.filter(item => item !== id))
    setArticle({
      article: article.article,
      ingredients: [...article.ingredients, id]
    })
  }


  const addCart = (item) => {
    if (item.ingredients.length !== 0) {
      setArticle(item)
      setModal(true)
      setRecicle([])
    } else {
      addProCarrito({ ...meals[indexModule], information: recicle })
    }
  }
  const addArticleCart = (item) => {
    addProCarrito({ ...meals[indexModule], information: recicle })
    setModal(false)
  }


  return (
    <>

      <div className={styles.container}>
        <div className={styles.container_price_heart}>
          <span
            className={styles.price}
            style={{
              color:
                meals[indexModule].textColor || meals[indexModule].backgroundColor,
            }}
          >
            ${meals[indexModule].price}
          </span>

          <span className={styles.icon} onClick={() => addFavoriteOrSupr(meals[indexModule])}>{isFavorite(meals[indexModule])}</span>
        </div>
        <div className={styles.containerLogoInSpin}>
          {
            meals[indexModule].series ? <img onClick={() => navigate('/')} className={styles.imgInSpin} src="../images/PROFESOR.png" alt="EL PROFESOR CASA DE PAPEL" width="30px" /> :
              <></>
          }

        </div>
        <span className={styles.foodName}>{meals[indexModule].name}</span>
        {meals[indexModule].information.length === 0 ?
          <div ></div> : <div className="container-detail-des" onClick={() => addCart({ article: meals[indexModule].name, ingredients: meals[indexModule].information })}>
            <p className="des ingre">Ver ingredientes <b>+</b> </p>
            <div className="response">
              {/* <p className={styles.foodInfo}>{meals[indexModule].information}</p> */}
            </div>
          </div>}

        <div
          className={styles.orderBtn}
          style={{
            backgroundColor: meals[indexModule].textColor,
            boxShadow: `0px 4px 14px 1px ${meals[indexModule].textColor}`,
            MozBoxShadow: `0px 4px 14px 1px ${meals[indexModule].textColor}`,
            WebkitBoxShadow: `0px 4px 14px 1px ${meals[indexModule].textColor}`,
          }}
          onClick={() => addCart({ article: meals[indexModule].name, ingredients: meals[indexModule].information })}
        >
          <span onClick={() => { }} className={styles.orderText}>Agregar a la orden</span>
        </div>
      </div>
      {
        modal ? <ModalPortal onClose={() => setModal(false)}>
          <div className={styles.containerModal}>
            <div className={styles.items}>
              <p className={styles.titleModal}>{article.article}</p>
              <p className={styles.subTitle}>Descarta o agrega ingrendientes</p>
              {
                recicle.length !== 0 ? <>
                  <p className={styles.subTitle}>Agrega ingrendientes</p>
                  <ul className={styles.recicles}>
                    {
                      recicle.map(item => <ModalItem
                        deleteRecicle={deleteRecicle}
                        add name={item} icon={icon(item)} />)
                    }
                  </ul></> : <></>
              }
              <p className={styles.subTitle}>Descarta ingrendientes</p>
              <ul>
                {
                  article.ingredients.map(item => <ModalItem
                    addRecicle={addRecicle}
                    deleteIngredient={deleteIngredient} name={item} icon={icon(item)} />)
                }
              </ul>
            </div>

            <div
              className={styles.orderBtn}
            >
              <span className={styles.orderText} onClick={() => addArticleCart(meals[indexModule])}>Agregar a la orden</span>
            </div>
          </div>
        </ModalPortal> : <></>
      }
    </>
  )
}
