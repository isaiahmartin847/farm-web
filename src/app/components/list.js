"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"
// import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({earlygirl: 1})

    useEffect(() => {
        // const stoaredData = JSON.parse(localStorage.getItem("cart"))
        //set the items to the data base
        setItems(() => {
            return largeTomatos
        })

/*
        if (stoaredData){
            
            setCart((cart) => {
                return [...cart, ...stoaredData]
            })

            
        } else {
            
            console.log("no cart found")
            localStorage.setItem("cart", JSON.stringify([]))
        }
*/

        console.log(`cart: ${cart.earlygirl}`)
    }, [])


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])



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




