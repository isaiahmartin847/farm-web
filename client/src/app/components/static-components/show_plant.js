import moreBtn from "../more-btn-function"


export default function ShowPlant ({name, color, colorcode, description, days, url}) {

    
  
    return (
        <div className="border-b-2  m-0.5 flex flex-col justify-center items-center ">
            <div  className="m-0.5 p-3 w-[300px]">
                <div className="ml-10">
                    <h1  className="mr-1 text-lg" >Name: <span className="font-serif text-xl">{name}</span></h1>                    
                    <ul  className="ml-5 pb-2">
                        <li ><div className="flex flex-row">Color: {color}   <div className={` h-4 w-4 ${colorcode} rounded-lg  mt-1 ml-1`}></div></div></li>
                        <li>Days: {days}</li>
                        <li>description: <span className="font-serif text-[1.1em]">{description}</span></li>
                    </ul>
                    <button className="bg-blue-500 w-full rounded text-white font-bold p-1" onClick={() => moreBtn(url)}>MORE</button>
                </div>
            </div>
        </div>
    )
}