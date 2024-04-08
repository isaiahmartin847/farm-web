"use client"

import { useEffect, useState } from "react"
import { largeTomatoes, smallTomatoes } from "../plant-data"
import PlantList from "./plat-list"
import Title from "./title"
// import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({})
    const [smallTomatoesState, setSmallTomatos] = useState([])

    useEffect(() => {
         const stoaredData = JSON.parse(localStorage.getItem("cart"))
        //set the items to the data base
        setItems(() => {
            return largeTomatoes
        })
        setSmallTomatos(() => {
            return smallTomatoes
        })


        if (stoaredData){
            console.log(JSON.stringify(stoaredData))
            setCart((cart) => {
                return {...cart ,...stoaredData}
            })
  
        } else {
            localStorage.setItem("cart", JSON.stringify({}))
        }


        
    }, [])


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])



    return(
        <>
            <Title title={"Main Slicing Tomatoes"}></Title>
            {items.map(item => {
                return (
                    < PlantList key={item.id} {...item} cart={cart} setCart={setCart}/> 
                )
            })}
            <Title title={"Small-Fruited Tomatoes"}></Title>
            {smallTomatoesState.map(item => {
                return (
                    < PlantList key={item.id} {...item} cart={cart} setCart={setCart}/> 
                )
            })}
            
        </>
    )
}




