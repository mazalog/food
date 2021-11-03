import React,{useEffect,useState,useMemo,createContext} from 'react'

const Context=createContext({})

export function CartContextProvider({children}){
    const [carrito,setCarrito]=useState([])

    useEffect(()=>{
    const cartInStorage=localStorage.getItem('carro')
    if(cartInStorage){
     setCarrito(JSON.parse(cartInStorage))
    }
    },[])

    const values=useMemo(()=>({carrito,setCarrito}),[carrito])

    return <Context.Provider value={{values}}> {children} </Context.Provider>

}

export default Context