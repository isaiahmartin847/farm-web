"use client"

import { useEffect, useState } from "react"
import Plant from "./plat"
import Title from "./title"
import Loading from "./loading"



export default function List () {
    const [plants, setPlants] = useState(null)
    const [largeTomatoes, setLargeTomatoes] = useState({})
    const [smallTomatoesState, setSmallTomatoes] = useState(null)
    const [peppers, setPeppers] = useState(null)
    const [cart, setCart] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
         const storedData = JSON.parse(localStorage.getItem("cart"))
         const getPlantData =  () => {
            fetch('http://localhost:8080/plants')
            .then(response => {
                if(!response.ok){
                    throw new Error("network error for fetching the data")
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(`there was on error ${error}`)
            })

            setIsLoading(false)
         }

         getPlantData()

        if (storedData){
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


    if(true) {
        return (
            <h1>testing</h1>
        )
    } else {

    
        return(
            <>

                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                    <Title title={"Main Slicing Tomatoes"}></Title>
                    {largeTomatoes.map(item => {
                        return (
                            < Plant key={item.id} {...item} cart={cart} setCart={setCart}/> 
                        )
                    })}
                    <Title title={"Small-Fruited Tomatoes"}></Title>
                    {smallTomatoesState.map(item => {
                        return (
                            < Plant key={item.id} {...item} cart={cart} setCart={setCart}/> 
                        )
                    })}
                    <Title title={"peppers"}></Title>
                    {peppers.map(item => {
                        return (
                            < Plant key={item.id} {...item} cart={cart} setCart={setCart}/> 
                        )
                    })}
                    </div>
                )}

            </>
        )
    }
}



