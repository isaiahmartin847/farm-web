"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"
import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        setItems(() => {
            return largeTomatos
        })


    }, [])

    useEffect(() => {
        const stoaredData = localStorage.getItem("cart")
        console.log(stoaredData)
        if (stoaredData){
            
             localStorage.setItem("cart", JSON.stringify(cart))     
        } else {
            localStorage.setItem("cart", JSON.stringify(cart))
        }


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