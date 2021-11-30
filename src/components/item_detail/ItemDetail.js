import { useState, useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { cartContext } from '../context/cartContext'
import { BiError } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import ItemCount from "./ItemCount"
import Loading from "../misc/Loading"


const ItemDetail = ({ productDetail, error, inCart, fadeInTime }) => {

    const [stock, setStock] = useState(10)
    const [visible, setVisible] = useState(false)

    const { addToCart, removeFromCart } = useContext(cartContext)

    const amountFromCounter = (amount) => {
        if (stock >= amount) {

            setStock(stock - amount)
            setVisible(true)
            addToCart(productDetail, amount)
        }
    }

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { opacity: fadeInTime }
    })

    if (productDetail.length === 0 && inCart === false) {
        return (
            <Loading text="Cargando productos..." />
        )
    } else if (error === true) {
        return (
            <>
                <span className="mx-5 error"><BiError /> Hubo un problema al cargar los productos, intente nuevamente en unos minutos <BiError /></span>
                <button onClick={() => window.location.reload(false)}>Recargar página</button>
            </>
        )
    } else {
        return (
            <div div className="d-flex flex-column align-items-center">
                {inCart ? "" : <h2 className="mx-3 mb-3 mt-3">Vista detallada</h2>}
                <animated.div style={fadeIn}>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="text-white bg-dark d-flex flex-column mt-4 mx-4 align-items-center card">
                            <div className="card-header">{productDetail.title}</div>
                            <img className="cardImg" src={productDetail.pictureUrl} alt="Foto del producto" />
                            <div className="card-body d-flex flex-column align-items-center">
                                <span className="text-center mb-3">Detalles: {productDetail.description}</span>
                                <span>Precio: ${productDetail.price}</span>
                                {inCart ? "" : <p>Stock {stock} unidades</p>}
                                {inCart ? <span>Cantidad en carrito: {productDetail.qty}</span> : ""}
                            </div>
                            {inCart ? "" : <div>
                                <ItemCount stock={stock} initial={1} onAdd={amountFromCounter} visible={visible} />
                            </div>}
                            {inCart ? <button className="mb-3 px-1" onClick={() => removeFromCart(productDetail)}>
                                Remover <ImCross />
                            </button> : ""}
                        </div>
                    </div>
                </animated.div>
            </div>
        )
    }
}

export default ItemDetail