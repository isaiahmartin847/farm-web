"use client"
import { useEffect, useState } from "react";
import NavBar from "../components/nav";

export default function Cart() {
    const [userCart, setUserCart] = useState([])
    const [cartCount, setCartCount] = useState({
        a: 2,
        b: 1,
        c: 4
    })



    useEffect(() => {
        setUserCart(() => {
             return JSON.parse(localStorage.getItem('cart'))
            
        })

    }, [])


    // useEffect(() => {
    //     const counts = {}
    //     userCart.forEach(item => {
    //         if(!counts[item]) {
    //             counts[item] = 1
    //         } else {
    //             counts[item]++ 
    //         }

        
    //     })
    //     setCartCount(() => {
    //         counts
    //     })
    // }, [userCart])
    


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
            {Object.keys(cartCount).map(key => {
                return (
                    <div key={key}>
                        <h1>Name {key}</h1>
                        <h2>Count: {cartCount[key]}</h2>
                    </div>
                )
            })}
        </>
    )
}