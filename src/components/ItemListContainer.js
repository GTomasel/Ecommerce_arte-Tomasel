import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import GetItems from "./GetItems"


const ItemListContainer = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {

        GetItems.then((data) => {
            setDatos(data)
        })

    })


    return (
        <>
            <ItemList items={datos} />
        </>
    )
}

export default ItemListContainer