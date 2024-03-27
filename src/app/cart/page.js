"use client"
import { useEffect, useState } from "react";
import NavBar from "../components/nav";

export default function Cart() {
    const [userCart, setUserCart] = useState([])
    const [cartCount, setCartCount] = useState([])



    useEffect(() => {
        setUserCart(() => {
             return JSON.parse(localStorage.getItem('cart'))
            
        })

    }, [])


    useEffect(() => {
        const counts = {}
        userCart.forEach(item => {
            if(!counts[item]) {
                counts[item] = 1
            } else {
                counts[item]++ 
            }

        
        })
        console.log(counts)
    }, [userCart])
    


    return (
        <>
            <NavBar />
            {userCart.map(value => {
                return (
                    <div key={value}>
                        <h1>{value}</h1>
                    </div>
                )
            })}
        </>
    )
}