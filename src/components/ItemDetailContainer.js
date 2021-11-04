import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import productsJSON from "../products.json"


const ItemDetailContainer = () => {

    const [datosDetail, setDatosDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(productsJSON)
            }, 2000)

        })

        promesa.then((data) => {
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