"use client"
import { useEffect, useState } from "react";
import NavBar from "../components/nav";

export default function Cart() {
    const [userCart, setUserCart] = useState([])



    useEffect(() => {
        let counter = {}
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        if(!cartItems) {
            console.log("nothing in local storage")
            setUserCart({a: 2, b: 1})
        } else {
            cartItems.forEach(item => {
                if(!counter[item]) {
                    counter[item] = 1
                } else {
                    counter[item]++
                }
            })
            setUserCart(() => {
                return counter
            })
            // localStorage.removeItem("cart")
        }
    }, [])


    const decermentItem  = (key) => {
        if(userCart[key] === 1) {
            console.log("key already has only one")
            const newCart = {...userCart}
            delete newCart[key]
            setUserCart(newCart)
        } else {
            setUserCart(userCart => ({
                ...userCart,
                [key]: userCart[key] - 1
            }))
        }
    }


    const removeItem = (key) => {
        const tempCart = {...userCart}
        delete tempCart[key]
        setUserCart(tempCart) 
    }
    return (
        <>
            <NavBar />
            {Object.keys(userCart).map(key => {
                return (
                    <div key={key} className="border mb-4 flex-col justify-center text-center">
                        <h1>Name: {key}</h1>
                        <h2>Count: {userCart[key]}</h2>
                        <button className="bg-red-500 rounded p-1 mr-1" onClick={() => {decermentItem(key)}}>remove One</button>
                        <button className="bg-red-500 rounded p-1" onClick={() => {removeItem(key)}}>Remove All</button>
                    </div>
                )
            })}            
        </>
    )
}