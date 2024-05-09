"use client"
import { useEffect, useState } from "react";
import NavBar from "../components/nav";
import EmptyCart from "../components/empty-cart";

export default function Cart() {
    const [cart, setcart] = useState({})



    useEffect(() => {
        setcart((cart) => {
            return {...cart, ...JSON.parse(localStorage.getItem("cart"))}
        })

    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    const decermentItem  = (key) => {
        if(cart[key] === 1) {
            const newCart = {...cart}
            delete newCart[key]
            setcart(newCart)
        } else {
            setcart(cart => ({
                ...cart,
                [key]: cart[key] - 1
            }))
        }
    }


    const removeItem = (key) => {
        const tempCart = {...cart}
        delete tempCart[key]
        setcart(tempCart) 
    }


    return (
        <>
            <NavBar 
            btnName={"Home"}
            btnUrl={"/"}
            />
            
            {Object.entries(cart).length === 0 ? (
                <EmptyCart></EmptyCart>
            ): (
                <h1></h1>
            )}

            {Object.keys(cart).map(key => {
                return (
                    <div key={key} className="border mb-4 flex-col justify-center text-center">
                        <h1><span className="text-lg">Name:</span> <span className="font-bold">{key}</span></h1>
                        <h2><span className="italic pr-1 font-semibold">Count</span>: {cart[key]}</h2>
                        <div className="text-white font-semibold">
                            <button className="bg-orange-400 rounded p-1 mr-1" onClick={() => {decermentItem(key)}}>remove One</button>
                            <button className="bg-red-500 rounded p-1" onClick={() => {removeItem(key)}}>Remove All</button>
                        </div>
                    </div>
                )
            })}            
        </>
    )
}