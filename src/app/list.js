"use client"

import { useEffect, useState } from "react"
import { largeTomatos } from "./plant-data"

export default function List () {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(() => {
            return largeTomatos
        })
    })
    
    return(
        <>
            <h1>this is where the items will be displayed</h1>
            
        </>
    )
}