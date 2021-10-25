import ItemCount from "./components/ItemCount"


const ItemListContainer = ({greeting}) => {

    return(
        <>
            <p className="p-3">{greeting}</p>
            <ItemCount stock={10} initial={1} onAdd={function(){console.log("")}}/>
        </>
    )
}

export default ItemListContainer