export default function NavBar () {
    return (
        <nav className="bg-blue-500">
            <div className="flex justify-between items-center">
                <div className="flex item-center">
                    <h1>NAME</h1>
                </div>
                <div className="flex items-center">
                    <a>Go to cart</a>
                </div>
            </div>
        </nav>
    )
}