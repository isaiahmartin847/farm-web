import moreBtn from "./more-btn-function";

export default function PlantList ({name, id, price, url, color, colorCode}) {
    return ( 
        <div key={id} className="border-2  m-0.5 flex flex-col justify-center items-center">
            <div className="m-0.5 p-3">
                <h1 className="mr-1 text-lg text-center" >{name}</h1>
                <ul className="ml-5 pb-2">
                    <li>Price: {price}</li>
                    <li><div className="flex flex-row">Color: {color} <div className={`w-4 h-4 bg-${colorCode} mr-2 rounded-lg`}></div></div></li>

                </ul>
                <button className='text-lg mr-1 p-2 rounded-lg bg-blue-500 text-white'>Add to cart</button>
                <button className="text-lg p-2 rounded-lg bg-gray-400 text-white" onClick={() => moreBtn(url)}>More</button>

            </div>
        </div>
    )
}