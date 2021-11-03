import React, { useEffect, useState } from "react";
import styles from "./article.module.scss";
import { useLocation } from "wouter";
import Skeleton from "../Skeleton";
// import StartIcon from '../icons/StartIcon'

export default function Article({
    bgColor,
    brand,
    name,
    price,
    sale_price,
    image,
    border,
    start,
    href,
    series,
    ingredients,
    desc,
    onC,
    addProCarrito,
    item,
    ...props
}) {

    const [, navigate] = useLocation()

    // const [imageIsLoading, setImageIsLoading] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }, [])

    return (
        <>

            {loading ? <Skeleton /> : <></>}

            <div
                className={styles.verticalCard}
                style={{
                    display: `${loading ? 'none' : 'block'}`,
                }}
            >{
                    sale_price !== 0 ? <>
                        {sale_price && price && (
                            <button className={styles.favContainer}>
                                -{(((price - sale_price) / price) * 100) | 0}%
                            </button>
                        )}
                    </> : <></>
                }


                <button className={styles.add} style={{ background: `${series ? '#e5603f' : '#262f5f'}` }} onClick={() => addProCarrito({ article: name, ingredients: ingredients }, item)}>+</button>


                <div className={styles.imageContainer}>


                    <img

                        onClick={() => navigate(href)}
                        className={styles.image} src={image} loading="lazy" alt="" />

                </div>
                <div className={styles.textContainer}
                    style={{
                        boxShadow: `${series ? styles.shadowProfesor : styles.shadow}`
                    }}
                >
                    <h4>{name}</h4>
                    {sale_price ? (
                        <div className={styles.priceContainer}>
                            <div className={styles.prices}>
                                <span className={styles.priceText}>${price}</span>
                                <div className={styles.containerStartandSale}>
                                    <span className={styles.salePriceText}>${sale_price}</span>
                                </div>
                            </div>
                        </div>
                    ) : (<div className={styles.price_and_starts}>
                        <span
                            style={{
                                color: `${series ? '#e45734' : '#262f5f'}`

                            }}

                            className={styles.salePriceText}>${price || 0}</span>
                        {
                            series ? <img src="./images/PROFESOR.png" width="27px" alt="IMAGEN DEL PROFESOR CASA DE PAPEL" /> : <></>
                        }

                        <div>
                            {/* {
                                start !== 0 ? <>   <span>{start}</span> <StartIcon /></> : <></>
                            } */}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}
