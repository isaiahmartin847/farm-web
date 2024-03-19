export default function PlantList ({name, id, price}) {
    return ( 
        <div>
            <h1>{name}</h1>
            <h2>Price ${price}</h2>
        </div>
    )
}