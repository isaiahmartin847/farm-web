"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"
// import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        setItems(() => {
            return largeTomatos
        })

    }, [])

    useEffect(() => {
        const stoaredData = JSON.parse(localStorage.getItem("cart"))
        if (stoaredData){
            // take data from local storage and set it to cart\
            console.log(stoaredData)
            setCart((cart) => {
                return [...cart, ...stoaredData]
            })

            
        } else {
            // create a new local storage item named cart and set the value to cart 
            console.log("no cart found")
        }
       

        console.log(`cart: ${cart}`)
    }, [])

    
    return(
        <>
            {items.map(item => {
                return (
                    < PlantList key={item.id} {...item} cart={cart} setCart={setCart}/> 
                )
            })}
            
        </>
    )
}




