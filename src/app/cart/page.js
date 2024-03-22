"use client"
import { useState } from "react";
import NavBar from "../components/nav";

export default function Cart() {
    const [userCart, setUserCart] = useState([])
    return (
        <>
            <NavBar />
            <h1>this is the cart</h1>
        </>
    )
}