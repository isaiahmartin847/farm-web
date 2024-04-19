'use client'


import { useEffect, useState } from "react"
import ShowPlant from "../components/static-components/show_plant"
import Loading from "../components/loading"
import Title from "../components/title"



export default function Static ()  {
    const [plants, setPlants] = useState(null)
    const [largeTomatoes, setLargeTomatoes] = useState({})
    const [cherryTomatoesState, setCherryTomatoes] = useState(null)
    const [sweetPeppers, setSweetPeppers] = useState(null)
    const [hotPeppers, setHotPeppers] = useState(null)
    const [otherPlants, setOtherPlants] = useState(null)
    const [strawberries, setStrawberries] = useState(null)
    const [asparagus, setAsparagus] = useState(null)
    const [IsLoading, setIsLoading] = useState(true)


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
            })
    }, [])

    useEffect(() => {
        if(plants){
            setCherryTomatoes(plants.filter(plant => plant.type === "cherry"))
            setLargeTomatoes(plants.filter(plant => plant.type === "large"))
            setSweetPeppers(plants.filter(plant => plant.type === "sweet"))
            setHotPeppers(plants.filter(plant => plant.type === "hot"))
            setStrawberries(plants.filter(plant => plant.species === 'strawberries'))
            setAsparagus(plants.filter(plant => plant.species === 'asparagus'))

            setIsLoading(false)
        }

    }, [plants])


    if (!IsLoading) {
        return (
            <>


                <Title title={"Main Slicing Tomatoes"}></Title>
                {largeTomatoes.map(item => {
                    return (
                        <ShowPlant
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        url={item.url}
                        color={item.color}
                        colorcode={item.colorcode}
                        description={item.description}  
                        />
                    )
                })}
                <Title title={"Cherry Tomatoes"}></Title>
                {cherryTomatoesState.map(item => {
                    return (
                        <ShowPlant
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        url={item.url}
                        color={item.color}
                        colorcode={item.colorcode}
                        description={item.description}  
                        />
                    )
                })}
                <Title title={"Sweet Peppers"}></Title>
                {sweetPeppers.map(item => {
                    return (
                        <ShowPlant
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        url={item.url}
                        color={item.color}
                        colorcode={item.colorcode}
                        description={item.description}  
                        />
                    )
                })}
                <Title title={"Hot Peppers"}></Title>
                {hotPeppers.map(item => {
                    return (
                        <ShowPlant
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        url={item.url}
                        color={item.color}
                        colorcode={item.colorcode}
                        description={item.description}  
                        />
                    )
                })}
                <Title title={"Strawberries"}/> 
                {strawberries.map(item => {
                    return (
                        <ShowPlant
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        url={item.url}
                        color={item.color}
                        colorcode={item.colorcode}
                        description={item.description}  
                        />
                    )
                })}
                <Title title={"Asparagus"}></Title>
                {asparagus.map(item => {
                    return (
                        <ShowPlant
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        url={item.url}
                        color={item.color}
                        colorcode={item.colorcode}
                        description={item.description}  
                        />
                    )
                })}
            </>
        )
    } else {
        return (
            <Loading />
        )
    }
} 