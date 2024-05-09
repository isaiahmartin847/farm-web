


export default function AddedToCart ( {isActive,  setIsActive }) {


    if(isActive) {

        setTimeout(() => {
            setIsActive(false)
        }, 700)
        return (
            <div className="bg-lime-500 h-full w-full rounded-lg text-center">
                <h1>Added to list</h1>
            </div>
        )
    }
}