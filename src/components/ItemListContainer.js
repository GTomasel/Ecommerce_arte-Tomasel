import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import productsJSON from "../products.json"


const ItemListContainer = () => {

    const [datos, setDatos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(productsJSON)
            }, 2000)

        })
        
        promesa.then((data) => {
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