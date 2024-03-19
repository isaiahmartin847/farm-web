"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "../plant-data"
import PlantList from "./plat-list"

export default function List () {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(() => {
            return largeTomatos
        })
    }, [])

    
    return(
        <>
            {items.map(item => {
                return (
                    < PlantList price={item.price} name={item.name} id={item.id}/> 

                )
            })}
            
        </>
    )
}