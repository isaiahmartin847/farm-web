export default function NavBar () {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center text-white">
                <div className="flex item-center ml-4">
                    <h1 className="font-extrabold text-xl">NAME</h1>
                </div>
                <div className="flex items-center mr-4 text-white">
                    <a href="#" className="bg-blue-800 px-5 py-2 rounded mr-3">Cart</a>
                    <a href="#" className="bg-blue-800 px-5 py-2 rounded">Home</a>
                </div>
            </div>
        </nav>
    )
}