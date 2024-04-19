


export default function ShowPlant ({name, color, colorcode, description}) {

    
  
    return (
        <div className="border-b-2  m-0.5 flex flex-col justify-center items-center ">
            <div  className="m-0.5 p-3 w-[300px]">
                <div className="ml-10">
                    <h1  className="mr-1 text-lg" >Name: <span className="font-serif text-xl">{name}</span></h1>                    
                    <ul  className="ml-5 pb-2">
                        <li ><div className="flex flex-row">Color: {color}   <div className={` h-4 w-4 ${colorcode} rounded-lg  mt-1 ml-1`}></div></div></li>
                        <li>description: <span className="font-serif text-[1.1em]">{description}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}