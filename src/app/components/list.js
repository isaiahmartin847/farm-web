"use client"

import { useEffect, useState } from "react"
import { largeTomatoes, peppers, peppersData, smallTomatoes } from "../plant-data"
import PlantList from "./plat-list"
import Title from "./title"
// import randomKey from "./random-key"

export default function List () {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({})
    const [smallTomatoesState, setSmallTomatoes] = useState([])
    const [peppers, setPeppers] = useState([])


    useEffect(() => {
         const storedData = JSON.parse(localStorage.getItem("cart"))
        //set the items to the data base
        setItems(() => {
            return largeTomatoes
        })
        setSmallTomatoes(() => {
            return smallTomatoes
        })
        setPeppers(() => {
            return peppersData
        })


        if (storedData){
            console.log(JSON.stringify(storedData))
            setCart((cart) => {
                return {...cart ,...storedData}
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
            <Title title={"peppers"}></Title>
            {peppers.map(item => {
                return (
                    < PlantList key={item.id} {...item} cart={cart} setCart={setCart}/> 
                )
            })}
            
        </>
    )
}




