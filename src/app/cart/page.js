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
            localStorage.removeItem("cart")
        }

    }, [])


    const removeItem = (key) => {
        console.log(`button clicked key: ${key}`)
        Object.keys(userCart).map(itemKey => {
            if(itemKey === key){
                console.log(`found obj ${userCart[key]}`)
            }
        })
    
    }

    return (
        <>
            <NavBar />
            {Object.keys(userCart).map(key => {
                return (
                    <div key={key} className="border mb-4 flex-col justify-center text-center">
                        <h1>Name: {key}</h1>
                        <h2>Count: {userCart[key]}</h2>
                        <button className="bg-red-500 rounded p-1" onClick={() => {removeItem(key)}}>remove</button>
                    </div>
                )
            })}            
        </>
    )
}