import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import GetItems from "./GetItems"


const ItemDetailContainer = () => {

    const [datosDetail, setDatosDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {

        GetItems.then((data) => {
            const found = data.find(e => e.id === parseInt(id))
            setDatosDetail(found)
        })

    })


    return (
        <>
            <ItemDetail detail={datosDetail} />
        </>
    )
}

export default ItemDetailContainer