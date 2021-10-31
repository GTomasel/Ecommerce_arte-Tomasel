import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail"
import productsJSON from "../products.json"


const ItemDetailContainer = ({ id }) => {

    const [datosDetail, setDatosDetail] = useState([])

    useEffect(() => {

        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(productsJSON)
            }, 3000)

        })

        promesa.then((data) => {
            const found = data.find(e => e.id === id)
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