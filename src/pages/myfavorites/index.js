import React from 'react'
import Layout from '../../components/Layout'
import ListMyFavorites from '../../components/ListMyFavorites'
import useFavorites from '../../hooks/favorites.hook'

export default function MyFavoritesPage() {

    const { favorites, isFavorite, addFavoriteOrSupr } = useFavorites()

    return (
        <Layout noLogo>
            <ListMyFavorites addFavoriteOrSupr={addFavoriteOrSupr} favorites={favorites} isFavorite={isFavorite} />
        </Layout>
    )
}