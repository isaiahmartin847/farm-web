"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"
import Title from "./title"
// import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({})

    useEffect(() => {
         const stoaredData = JSON.parse(localStorage.getItem("cart"))
        //set the items to the data base
        setItems(() => {
            return largeTomatos
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
            <Title title={"Larg tomatos"}></Title>
            {items.map(item => {
                return (
                    < PlantList key={item.id} {...item} cart={cart} setCart={setCart}/> 
                )
            })}
            <Title title={"Small tomatos"}></Title>
            
        </>
    )
}




