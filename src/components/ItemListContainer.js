import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from "../firebase"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const { category } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {

        const collection = firestore.collection("productos")

        let promise

        if (category != null) {
            promise = collection.where("category", "==", category).get()
           
        } else {
            promise = collection.get()
        }

        promise
            .then(result => {

                const productos = []

                result.docs.forEach(doc => {
                    const producto = { ...doc.data(), id: doc.id }
                    productos.push(producto)
                })
                
                setItems(productos)
                
            })
            .catch(() => {
                console.log("promise error")
            })
            
        },[category])
        

    return (
        <>
            <ItemList items={items} category={category} />
        </>
    )
}

export default ItemListContainer