import ItemCount from "./components/ItemCount"


const ItemListContainer = ({greeting}) => {
    

    return(
        <>
            <p class="p-3">{greeting}</p>
            <ItemCount stock={10} initial={1}/>
        </>
    )
}

export default ItemListContainer