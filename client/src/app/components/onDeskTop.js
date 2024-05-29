import { useEffect, useState } from "react"




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
            <div className="justify-center text-center content-center mt-2">
                <button className="border-black border-2 rounded-lg bg-blue-500 text-white font-semibold p-2 hover:bg-blue-400" onClick={() => {toggleMsg()}}>proceed to the app</button>
            </div>
        </div>
    )
    }
}