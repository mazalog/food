import React, { useState } from 'react'
import Article from '../../components/Article'
import Articles from '../../components/Articles'
import CategoriesBar from '../../components/Categories'
import CasaDePapelIcon from '../../components/Icons/CasaDePapel'
import Layout from '../../components/Layout'
import ModalPortal from '../../components/Modal'
// import Skeleton from '../../components/SkeletonGif'
import meals from '../../consts/meals'
import { useCarrito } from '../../hooks/cart.hook'
import styles from './home.module.scss'
import ModalItem from '../../components/ModalItem'
import CarneIcon from '../../components/Icons/Ingredients/CarneIcon'
import TomateIcon from '../../components/Icons/Ingredients/TomateIcon'
import AlfalfaIcon from '../../components/Icons/Ingredients/AlfalfaIcon'
import PepperoniIcon from '../../components/Icons/Ingredients/Pepperoni'
import ChampiñonesIcon from '../../components/Icons/Ingredients/ChampiñonesIcon'
import MaizIcon from '../../components/Icons/Ingredients/MaizIcon'
import QuesoItem from '../../components/Icons/Ingredients/QuesoItem'
import MozzarelaIcon from '../../components/Icons/Ingredients/MozzarelaIcon'
import TocinetaIcon from '../../components/Icons/Ingredients/TocinetaIcon'
import AceitunasNegras from '../../components/Icons/Ingredients/AceitunasNegrasIcon'
import SalsaIcon from '../../components/Icons/Ingredients/SalsaIcon'
import CebollaIcon from '../../components/Icons/Ingredients/CebollaIcon'
import ChorizoIcon from '../../components/Icons/Ingredients/ChorizoIcon'
import LechugaIcon from '../../components/Icons/Ingredients/Lechuga'
import PapasIcon from '../../components/Icons/Ingredients/PapasIcon'
import PepinilloIcon from '../../components/Icons/Ingredients/Pepinillo'
import RepolloIcon from '../../components/Icons/Ingredients/RepolloIcon'
import ChuletaIcon from '../../components/Icons/Ingredients/ChuletaIcon'
import QuesoAmarillo from '../../components/Icons/Ingredients/QuesoAmarillo'
import AguacateIcon from '../../components/Icons/Ingredients/AguacateIcon'
import MilanesaIcon from '../../components/Icons/Ingredients/MilanesaIcon'


export default function HomePage() {
    // const [gifLoading, setGifLoading] = useState(true)
    const { addProCarrito } = useCarrito()

    const [modal, setModal] = useState(false)

    const [article, setArticle] = useState({
        article: '',
        ingredients: []
    })
    const [articleComplete, setArticleComplete] = useState({})

    const deleteIngredient = (id) => {
        setArticle({
            article: article.article,
            ingredients: article.ingredients.filter(item => item !== id)
        })
    }
    const [recicle, setRecicle] = useState([])

    const addRecicle = (item) => {
        setRecicle([...recicle, item])
    }

    const deleteRecicle = (id) => {
        setRecicle(recicle.filter(item => item !== id))
        setArticle({
            article: article.article,
            ingredients: [...article.ingredients, id]
        })
    }

    const addCart = (item, itemComplete) => {
        if (item.ingredients.length !== 0) {
            setArticle(item)
            setArticleComplete(itemComplete)
            setRecicle([])
            setModal(true)
        } else {
            addProCarrito({ ...itemComplete, information: recicle })
        }

    }
    const addArticleCart = (item) => {
        addProCarrito({ ...articleComplete, information: recicle })
        setModal(false)
    }

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

    return (
        <Layout>
            <div className={styles.containerBackground}>
                <h2 className={styles.titleOne}>LLEGA A  <span style={{ marginLeft: '2px', color: '#7d5399' }}>   CARACASBURGUER</span> </h2>
            </div>
            <div className={styles.containerGif} style={{ marginTop: '10px' }}>
                <img src="./images/CASA-PAPEL.png" alt="LOGO CASA DE PAPEL" />
            </div>
            <div>
                <h2 className={styles.title}>Buen Provecho <CasaDePapelIcon /> </h2>
            </div>
            <CategoriesBar />
            <div className={styles.containerAll}>
                <h3>Todo</h3>
            </div>
            <img className={styles.img1} alt="Imagen de hamburguesa" src="./FONDO1.png" />
            {/* <img className={styles.img2} alt="Imagen de hamburguesa" src="./FONDO2.png" /> */}

            <Articles>
                {
                    meals.map((item, index) =>
                        <Article
                            item={item}
                            addProCarrito={addCart}
                            bgColor="#f6f6f6"
                            image={item.url}
                            name={item.name}
                            href={`/detail/${item.name}`}
                            price={item.price}
                            series={item.series}
                            key={index}
                            ingredients={item.information}
                            setModal={setModal}
                            position={index}
                        />)
                }

            </Articles>
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
                            <span className={styles.orderText} onClick={() => addArticleCart(articleComplete)}>Agregar a la orden</span>
                        </div>
                    </div>
                </ModalPortal> : <></>
            }

        </Layout >
    )
}