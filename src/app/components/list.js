"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"
// import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        const stoaredData = JSON.parse(localStorage.getItem("cart"))
        //set the items to the data base
        setItems(() => {
            return largeTomatos
        })

        //seting the cart to the local storage items
        if (stoaredData){
            // take data from local storage and set it to cart\
            setCart((cart) => {
                return [...cart, ...stoaredData]
            })

            
        } else {
            // create a new local storage item named cart and set the value to cart 
            console.log("no cart found")
            localStorage.setItem("cart", JSON.stringify([]))
        }
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




