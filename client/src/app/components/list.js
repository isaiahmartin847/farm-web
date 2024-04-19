"use client"

import { useEffect, useState } from "react"
import Plant from "./plat"
import Title from "./title"
import Loading from "./loading"



export default function List () {
    const [plants, setPlants] = useState({})
    const [largeTomatoes, setLargeTomatoes] = useState({})
    const [smallTomatoesState, setSmallTomatoes] = useState(null)
    const [peppers, setPeppers] = useState(null)
    const [cart, setCart] = useState(null)
    const [isLoading, setIsLoading] = useState(1)


    useEffect(() => {
         const storedData = JSON.parse(localStorage.getItem("cart"))
         const getPlantData =  () => {
            //fetching the data from the api 
            fetch('http://localhost:8080/plants')
            .then(response => {
                if(!response.ok){
                    throw new Error("network error for fetching the data")
                }
                return response.json()
            })
            .then(data => {
                setIsLoading(() => {
                    return 0
                })

                setPlants(data)
            })
            .catch(error => {
                console.log(`there was on error ${error}`)
            })
            //setting all the values of the states
            

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

    if(isLoading === 0) {
         console.log(plants)
        setSmallTomatoes(() => {
            return plants.filter(plant => plant.type === "cherry")
        })
        setLargeTomatoes(() => {
            return plants.filter(plant => plant.type === "large") 
        })
        setPeppers(() => {
            return plants.filter(plant => plant.species === "pepper")
        })


        setIsLoading(3)

    }
    

    if(isLoading === 3) {
    
        return(
            <>

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
                

            </>
        )
    } else {
        return <isLoading />
    }
}



