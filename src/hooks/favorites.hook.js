import
//  React, 
 { useEffect, useState } from 'react'
// import IconHeart from '../components/Icons/Heart'
// import IconHeartBlack from '../components/Icons/HeartBlack'

export default function useFavorites(){

    const [favorites,setFavorites]=useState([])

    useEffect(()=>{
     const favoritesInStorage=localStorage.getItem('favorites')
     if(favoritesInStorage)  setFavorites(JSON.parse(favoritesInStorage))
    },[])

    const addFavoriteOrSupr=(item)=>{
        if(favorites.length!==0){
        const itemIsFavorite=favorites.some(doc=>doc.id===item.id)

        if(!itemIsFavorite){
            const registroActualizado=[...favorites, item]
            setFavorites(registroActualizado)
            localStorage.setItem('favorites',JSON.stringify(registroActualizado))
        }else{
           const registroActualizado=favorites.filter(doc=>doc.id!==item.id)
           setFavorites(registroActualizado)
           localStorage.setItem('favorites',JSON.stringify(registroActualizado))
        }

        }else{
            const registroActualizado=[...favorites, item]
            setFavorites(registroActualizado)
            localStorage.setItem('favorites',JSON.stringify(registroActualizado))
        }
    }

    const isFavorite=(item)=>{
        const itemIsFavorite=favorites.some(doc=>doc.id===item.id)
        if(itemIsFavorite) return '🖤'
        if(!itemIsFavorite) return '❤️'
    }

    return{
        favorites,
        addFavoriteOrSupr,
        isFavorite
    }
}