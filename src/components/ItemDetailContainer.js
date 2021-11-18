import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import { firestore } from "../firebase"


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const promise = firestore.collection("productos").doc(id).get()

        promise
            .then(result => {

                const producto = { ...result.data(), id: result.id }

                setProductDetail(producto)

            })
            .catch(() => {
                console.log("error")
            })

    })


    return (
        <>
            <ItemDetail productDetail={productDetail} />
        </>
    )
}

export default ItemDetailContainer