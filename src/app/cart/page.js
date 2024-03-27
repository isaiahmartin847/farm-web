"use client"
import { useEffect, useState } from "react";
import NavBar from "../components/nav";

export default function Cart() {
    const [userCart, setUserCart] = useState([])
    const [cartCount, setCartCount] = useState([])



    useEffect(() => {
        setUserCart(() => {
            // return JSON.parse(localStorage.getItem('cart'))
            return [1, 3, 2]
        })

    }, [])


    useEffect(() => {
        userCart.forEach(item => console.log(item))
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