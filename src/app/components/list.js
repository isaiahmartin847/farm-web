"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"
import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    const [storage, setStorage] = useState([1, 3])

    useEffect(() => {
        setItems(() => {
            return largeTomatos
        })
        // localStorage.setItem("cart", JSON.stringify(cart))


    }, [])

    useEffect(() => {
        const stoaredData = localStorage.getItem("cart")
        if (stoaredData){
            setStorage(() => {
                return JSON.parse(stoaredData)
            })
            console.log("succsefully added local stoarge to the hook")
        } else {
            console.log("unable to get the local stoarge")
        }
        console.log(`stoarage after getting the local storage = ${storage}`)

    }, [cart])

    
    return(
        <>
            <h1> this is starge = {storage}</h1>
            {items.map(item => {
                return (
                    < PlantList key={item.id} {...item} cart={cart} setCart={setCart}/> 

                )
            })}
            
        </>
    )
}