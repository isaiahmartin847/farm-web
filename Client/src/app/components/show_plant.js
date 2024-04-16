


export default function ShowPlant ({name, type, species, price, description}) {

    
  
    return ( 
        <div className="border-b-2  m-0.5 flex flex-col justify-center items-center">
            <div  className="m-0.5 p-3 w-[300px]">
                <h1  className="mr-1 text-lg text-center" >Name: {name}</h1>
                <ul  className="ml-5 pb-2">
                    <li >Price: {`$${price}`}</li>
                    <li ><div className="flex flex-row">Color: blue   <div className={` h-4 w-4 rounded-lg bg-blue-200 mt-1 ml-1`}></div></div></li>
                    <li>description: {description}</li>
                </ul>
              </div>
        </div>
    )
}