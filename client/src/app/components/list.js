"use client"

import { useEffect, useState } from "react"
import Plant from "./plat"
import Title from "./title"
import Loading from "./loading"
import OnDeskTop from "./onDeskTop"



export default function List () {
    const [plants, setPlants] = useState({})
    const [largeTomatoes, setLargeTomatoes] = useState({})
    const [cherryTomatoesState, setCherryTomatoes] = useState(null)
    const [sweetPeppers, setSweetPeppers] = useState(null)
    const [hotPeppers, setHotPeppers] = useState(null)
    const [otherPlants, setOtherPlants] = useState(null)
    const [strawberries, setStrawberries] = useState(null)
    const [asparagus, setAsparagus] = useState(null)

    const [cart, setCart] = useState({})
    const [isLoading, setIsLoading] = useState(1)


    useEffect(() => {
         const storedData = JSON.parse(localStorage.getItem("cart"))
         const getPlantData =  () => {
            //fetchLoom Videoing the data from the api 
            fetch('https://farm-web-psi.vercel.app/api')
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
        
        setCherryTomatoes(plants.filter(plant => plant.type === "cherry"))
        setLargeTomatoes(plants.filter(plant => plant.type === "large"))
        setSweetPeppers(plants.filter(plant => plant.type === "sweet"))
        setHotPeppers(plants.filter(plant => plant.type === "hot"))
        setOtherPlants(plants.filter(plant => plant.type === "other"))
        setStrawberries(plants.filter(plant => plant.species === 'strawberries'))
        setAsparagus(plants.filter(plant => plant.species === 'asparagus'))



        setIsLoading(3)

    }
    

    if(isLoading === 3) {
    
        return(
            <>  
                    <OnDeskTop />
                    <div>
                    <Title title={"Main Slicing Tomatoes"}></Title>
                    {largeTomatoes.map(item => {
                        return (
                            <Plant
                            key={item.id}
                            cart={cart}
                            setCart={setCart}
                            //below this is all the plant data
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            color={item.color}
                            colorcode={item.colorcode}
                            description={item.description}  
                            days={item.days}
                            />
                        )
                    })}
                    <Title title={"Cherry Tomatoes"}></Title>
                    {cherryTomatoesState.map(item => {
                        return (
                            <Plant
                            key={item.id}
                            cart={cart}
                            setCart={setCart}
                            //below this is all the plant data
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            color={item.color}
                            colorcode={item.colorcode}
                            description={item.description}  
                            days={item.days}
                            />
                        )
                    })}
                    <Title title={"Sweet Peppers"}></Title>
                    {sweetPeppers.map(item => {
                        return (
                            <Plant
                            key={item.id}
                            cart={cart}
                            setCart={setCart}
                            //below this is all the plant data
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            color={item.color}
                            colorcode={item.colorcode}
                            description={item.description}  
                            days={item.days}
                            />
                        )
                    })}
                    <Title title={"Hot Peppers"}></Title>
                    {hotPeppers.map(item => {
                        return (
                            <Plant
                            key={item.id}
                            cart={cart}
                            setCart={setCart}
                            //below this is all the plant data
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            color={item.color}
                            colorcode={item.colorcode}
                            description={item.description}
                            days={item.days}  
                            />
                        )
                    })}
                    <Title title={"Garden Greats"}></Title>
                    {otherPlants.map(item => {
                        return (
                            <Plant
                            key={item.id}
                            cart={cart}
                            setCart={setCart}
                            //below this is all the plant data
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            color={item.color}
                            colorcode={item.colorcode}
                            description={item.description}
                            days={item.days}  
                            />
                        )
                    })}
                    <Title title={"Strawberries"}/> 
                    {strawberries.map(item => {
                        return (
                            <Plant
                            key={item.id}
                            cart={cart}
                            setCart={setCart}
                            //below this is all the plant data
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            color={item.color}
                            colorcode={item.colorcode}
                            description={item.description}  
                            days={item.days}
                            />
                        )
                    })}
                    <Title title={"Asparagus"}></Title>
                    {asparagus.map(item => {
                        return (
                            <Plant
                            key={item.id}
                            cart={cart}
                            setCart={setCart}
                            //below this is all the plant data
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            color={item.color}
                            colorcode={item.colorcode}
                            description={item.description}  
                            days={item.days}
                            />
                        )
                    })}
                    </div>
                

            </>
        )
    } else {
        return <Loading />
    }
}
