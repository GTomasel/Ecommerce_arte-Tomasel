import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from "../../scripts/firebase"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [fetchError, setfetchError] = useState(false)

    const { id } = useParams()

    useEffect(() => {

        const promise = firestore.collection("productos").doc(id).get()

        promise
            .then(result => {

                const producto = { ...result.data(), id: result.id }

                setProductDetail(producto)

            })
            .catch(() => {
                setfetchError(true)
            })

    }, [id])


    return (
        <ItemDetail productDetail={productDetail} error={fetchError} />
    )
}

export default ItemDetailContainer