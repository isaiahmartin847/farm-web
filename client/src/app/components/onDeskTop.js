import { useEffect, useState } from "react"
import Image from 'next/image'
import farmwebqrcode from '/public/farmwebqrcode.png'




export default function OnDeskTop() {
    const [view, setView] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        if(width < 800) {
            setView(false)
        }
    }, [])

    const toggleMsg = () => {
        setView(false)
    }



    if(view) {
    return (
        <div className="w-screen h-screen border-black border-2">
            <h1 className="text-center mt-4 font-medium text-2xl">This application is made for mobile</h1>
            <div className="flex justify-center items-center m-10 flex-col">
                
                <Image 
                    src="/farmwebqrcode.png"
                    width={300}
                    height={300}
                /> 
                <h1 className="mt-2">Scan me on your phone</h1>
            </div>
            <div className="justify-center text-center content-center mt-2">
                <button className="border-black border-2 rounded-lg bg-blue-500 text-white font-semibold p-2 hover:bg-blue-400" onClick={() => {toggleMsg()}}>proceed to the app anyway</button>
            </div>
        </div>
    )
    }
}