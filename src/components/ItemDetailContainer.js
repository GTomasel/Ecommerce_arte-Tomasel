import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import GetItems from "./GetItems"


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {

        GetItems.then((data) => {
            const found = data.find(e => e.id === parseInt(id))
            setProductDetail(found)
        })

    })


    return (
        <>
            <ItemDetail productDetail={productDetail} />
        </>
    )
}

export default ItemDetailContainer