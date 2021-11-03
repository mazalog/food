import React from 'react'
import FoodInfo from '../../components/FoodInfo'
import Spin from '../../components/Spin'
import meals from '../../consts/meals'
import styles from './detail.module.scss'
// import Header from '../../components/Header'
import Layout from '../../components/Layout'


export const spinImages = [
    { categorie: 'hamburguesas', url: '../spin.png' }
]

export default function DetailPage({ params }) {

    const docs = meals.filter(doc => doc.name === decodeURI(params.name))
    const spinImage = spinImages.find(doc => doc.categorie === params.categorie)


    return (
        <>
            <Layout noLogo>
                <div className={styles.container}>
                    {docs.length !== 0 ? <>
                        <Spin noSpin meals={docs} spinImage={spinImage ? spinImage.url : false} categoriePage={true} />
                        <FoodInfo meals={docs} />
                    </> :
                        <div className={styles.emptydocs}>
                            <h3>Por ahora no tenemos nada para ti en {params.name}</h3>
                        </div>}
                </div>
            </Layout>

        </>
    )

}