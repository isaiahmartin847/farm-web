"use client"

import { useEffect, useState } from "react"
import PlantList from "./plat-list"
import Title from "./title"



export default function List () {
    const [largeTomatoes, setLargeTomatoes] = useState([])
    const [smallTomatoesState, setSmallTomatoes] = useState([])
    const [peppers, setPeppers] = useState([])
    const [cart, setCart] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
         const storedData = JSON.parse(localStorage.getItem("cart"))
         const getPlantData = async () => {
            try {
                
                setIsLoading(true)
                
                const [largeTomatoesRes, smallTomatoesRes, pepperRes] = await Promise.all([
                    fetch('http://localhost:8080/api/tomato/large'),
                    fetch('http://localhost:8080/api/tomato/small'),
                    fetch('http://localhost:8080/api/pepper'),
                ])


                const largeTomatoesData = await largeTomatoesRes.json()
                const smallTomatoesData = await smallTomatoesRes.json()
                const pepperData = await pepperRes.json()


                setLargeTomatoes(() => {
                    return largeTomatoesData.largeTomatoes
                })
                setSmallTomatoes(() => {
                    return smallTomatoesData.smallTomatoes
                })
                setPeppers(() => {
                    return pepperData.peppersData
                })

                console.log("done loading")


            } catch (err) {
                console.error(`failed to fetch the data ${err}`);
            }

            setIsLoading(true)
         }

         getPlantData()

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

            {isLoading ? (
                <div>
                    <div className="flex text-center justify-center mt-[30vh]">
                        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-500"/> 
                    </div>
                    <h1 className="text-center">Loading...</h1>
                </div>
            ) : (
                <div>
                <Title title={"Main Slicing Tomatoes"}></Title>
                {largeTomatoes.map(item => {
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
                </div>
            )}
            
        </>
    )
}




