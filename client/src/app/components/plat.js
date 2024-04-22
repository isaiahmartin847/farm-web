
import moreBtn from "./more-btn-function";
import Price from "./price";


export default function Plant ({name, price, url, color, colorcode, cart, setCart, description, days}) {
    

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
                        <h1  className="mr-1 text-lg" >Name: <span className="font-serif text-xl">{name}</span></h1>                   
                        <ul  className="ml-5 pb-2">
                            <Price price={price}/>
                            <li>Days: {days}</li>
                            <li ><div className="flex flex-row">Color: {color}   <div className={` h-4 w-4 ${colorcode} rounded-lg bg-blue-200 mt-1 ml-1`}></div></div></li>
                            <li>description: <span className="font-serif text-[1.1em]">{description}</span></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <button  className='text-lg mr-1 p-2 rounded-lg bg-blue-500 text-white' onClick={() => handleClick(cart, name)}>Add to list</button>
                        <button  className="text-lg p-2 rounded-lg bg-gray-400 text-white" onClick={() => moreBtn(url)}>More</button>
                    </div>
                </div>
            </div>
        )


}


