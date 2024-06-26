export default function NavBar ({btnName, btnUrl}) {
    return (
        <nav className="bg-blue-500 p-4 sticky top-0 z-50">
            <div className="flex justify-between items-center text-white">
                <div className="flex item-center ml-[1vw]">
                    <h1 className="font-extrabold text-xl">Covenant Gardens</h1>
                </div>
                <div className="flex items-center mr-[1vw] text-white">
                    {/* <a href="/list" className="bg-blue-800 px-5 py-2 rounded mr-3">Your list</a> */}
                    <a href={btnUrl} className="bg-blue-800 px-5 py-2 rounded">{btnName}</a>
                </div>
            </div>
        </nav>
    )
}