import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from "../../scripts/firebase"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const { category } = useParams()

    const [items, setItems] = useState([])
    const [fetchError, setfetchError] = useState(false)

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
                setfetchError(true)
            })

    }, [category])


    return (
        <ItemList items={items} category={category} error={fetchError} />
    )
}

export default ItemListContainer