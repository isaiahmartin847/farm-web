"use client"
import { useState } from "react";
import addToCart from "./add-to-cart-function";
import moreBtn from "./more-btn-function";
import Price from "./price";


export default function Plant ({name, id, price, url, color, colorCode, cart, setCart}) {
    

    const handleClick = (cart, itemName) => {
        if (cart[itemName]){
            setCart((cart) => {
                return {...cart, [itemName]: cart[itemName] + 1 }
            })
            return
        }
        setCart((cart) => {
            return {...cart, [itemName]: 1}
        })

    }
    

        return (
            <div className="border-b-2  m-0.5 flex flex-col justify-center items-center ">
                <div  className="m-0.5 p-3 w-[300px]">
                    <div className="ml-10">
                        <h1  className="mr-1 text-lg" >Name: {name}</h1>                    
                        <ul  className="ml-5 pb-2">
                            <Price price={4.1}/>
                            <li ><div className="flex flex-row">Color: {color}   <div className={` h-4 w-4 ${colorCode} rounded-lg bg-blue-200 mt-1 ml-1`}></div></div></li>
                            <li>description: N/A</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <button  className='text-lg mr-1 p-2 rounded-lg bg-blue-500 text-white' onClick={() => handleClick(cart, name)}>Add to cart</button>
                        <button  className="text-lg p-2 rounded-lg bg-gray-400 text-white" onClick={() => moreBtn(url)}>More</button>
                    </div>
                </div>
            </div>
        )


}


