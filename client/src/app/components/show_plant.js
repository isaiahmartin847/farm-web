import Price from "./price"


export default function ShowPlant ({name, type, species, price, color, colorCode, description}) {

    
  
    return (
        <div className="border-b-2  m-0.5 flex flex-col justify-center items-center ">
            <div  className="m-0.5 p-3 w-[300px]">
                <div className="ml-10">
                    <h1  className="mr-1 text-lg" >Name: {name}</h1>                    
                    <ul  className="ml-5 pb-2">
                        {/* <Price price={price}/> */}
                        <li ><div className="flex flex-row">Color: {color}   <div className={` h-4 w-4 ${colorCode} rounded-lg  mt-1 ml-1`}></div></div></li>
                        <li>description: {description}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}