"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"
import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([1])
    const [storage, setStorage] = useState([])

    useEffect(() => {
        setItems(() => {
            return largeTomatos
        })


    }, [])

    useEffect(() => {
        const stoaredData = localStorage.getItem("cart")
        if (stoaredData){
            // setStorage(() => {
            //     return JSON.parse(stoaredData)
            // })
            setStorage((cart) => {
                return [...cart]
            })
             localStorage.setItem("cart", JSON.stringify(cart))
            console.log("stoarge did exist but now i pulled it then spreaded the cart state then pushed the local stoarge again")

            
        } else {
            localStorage.setItem("cart", JSON.stringify(cart))
            console.log("cart did not exist in local stoarge but now does")
        }


    }, [cart])

    
    return(
        <>
            {/* <h1> this is starge = {storage}</h1> */}
            {items.map(item => {
                return (
                    < PlantList key={item.id} {...item} cart={cart} setCart={setCart}/> 

                )
            })}
            
        </>
    )
}