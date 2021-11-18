import { useState } from 'react'
import { firestore } from "../firebase"


const GetItems = () => {

    const [items, setItems] = useState([])

    const collection = firestore.collection("productos")

    const promise = collection.get()

    promise
        .then(result => {

            const productos = []

            result.docs.forEach(doc => {
                const producto = { ...doc.data() }
                producto.id = doc.id
                productos.push(producto)
            })

            setItems(productos)

        })
        .catch(() => {
            console.log("error")
        })


    return items
}

export default GetItems



