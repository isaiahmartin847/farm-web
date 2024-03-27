"use client"
import { useEffect, useState } from "react";
import NavBar from "../components/nav";

export default function Cart() {
    const [userCart, setUserCart] = useState([1, 3, 4])
    const [cartCount, setCartCount] = useState({})

    // useEffect((userCart) => {
    //     setUserCart(() => {
    //         return JSON.parse(localStorage.getItem('cart'))
    //     })
    // }, [])


    // userCart.forEach((element) => {
    //     console.log(element)
    // })


    return (
        <>
            {/* <NavBar /> */}
            {userCart.map(value => {
                return (
                    <h1>{value}</h1>
                )
            })}
        </>
    )
}