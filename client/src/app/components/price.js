export default function Price ({price}) {
    if(price % 2 === 0) {
        return (
            <li className="font-bold">Price: <span className="italic">${price}.00</span></li>
        )
    } else if (price.length === 3) {
        return (
            <li className="font-bold">Price: <span className="italic">${price}0</span></li>
        )
    } else {
        console.log(price.length) 
        return (
            <li className="font-bold">Price: <span className="italic">${price}</span></li>
        )
    }
}