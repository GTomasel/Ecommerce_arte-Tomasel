import ItemCount from "./ItemCount"
import { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from './cartContext'



const ItemDetail = ({ productDetail }) => {

    const [stock, setStock] = useState(10)
    const [visible, setVisible] = useState(false)

    const { addToCart } = useContext(cartContext)
    
    const amountFromCounter = (amount) => {
        if (stock >= amount) {

            setStock(stock - amount)
            setVisible(true)

            addToCart(productDetail, amount)
        }
    }

    if (productDetail.length === 0) {
        return (
            <>
                <div className="d-flex mx-3 align-items-center">
                    <img src="/loading.gif" alt="cargando" width="50px" />
                    <p className="mx-2">Cargando productos...</p>
                </div>
            </>
        )
    } else {
        return (
            <div div className="mx-5">
                <h3 className="mx-3 mb-1 mt-5">Detalle de item</h3>
                <div className="d-flex">
                    <div className="text-white bg-dark d-flex flex-column mt-4 mx-4 align-items-center card">
                        <div className="card-header">{productDetail.title}</div>
                        <img className="cardImg" src={productDetail.pictureUrl} alt="Foto del producto" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <span>Detalles: {productDetail.description}</span>
                            <span>Precio: ${productDetail.price}</span>
                            <p>Stock {stock} unidades</p>
                        </div>
                        <div>
                            <ItemCount stock={stock} initial={1} onAdd={amountFromCounter} visible={visible} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetail