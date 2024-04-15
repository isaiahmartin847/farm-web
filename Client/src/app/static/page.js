'use client'

import { useEffect, useState } from "react"
import ShowPlant from "../components/show_plant"



export default function Static ()  {
    const [plants, setPlants] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/plants")
            .then(res => {
                if(!res) {
                    throw new Error("network response is not ok")
                }
                return res.json()
            })
            .then(data => {
                setPlants(data)
                console.log(data)
            })
    }, [])


    if (plants) {
        return (
            <>
                {plants.map(plant => {
                    return (
                        <ShowPlant key={plant.id} name={plant.name} type={plant.type} price={plant.price} description={plant.description}/>
                    )
                })}
            </>
        )
    } else {
        return (
            <h1>data does not exist</h1>
        )
    }
} 