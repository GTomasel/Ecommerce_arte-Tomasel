import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
//import ItemCount from "./ItemCount"
import productsJSON from "../products.json"




const ItemListContainer = ({ greeting }) => {

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
            <p className="p-3">{greeting}</p>
            <ItemList items={datos} />
            {/* <ItemCount stock={10} initial={1} onAdd={function () { console.log("") }} /> */}
        </>
    )
}

export default ItemListContainer