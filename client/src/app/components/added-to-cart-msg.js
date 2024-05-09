


export default function AddedToCart ( {isActive,  setIsActive }) {


    if(isActive) {

        setTimeout(() => {
            setIsActive(false)
        }, 1000)
        return (
            <div className="bg-red-500 h-full w-full">
                <h1>this bitch was clicked</h1>
            </div>
        )
    }
}