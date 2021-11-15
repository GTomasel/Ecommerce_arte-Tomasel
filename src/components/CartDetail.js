import { cartContext } from './cartContext'
import { useContext } from 'react'
import { ImCross } from 'react-icons/im'


const CartDetail = ({ product }) => {

    const { removeFromCart } = useContext(cartContext)

    return (
        <div className="text-white bg-dark d-flex flex-column mt-4 mx-4 align-items-center justify-content-between card">
            <div className="card-header">{product.title}</div>
            <img className="cardImg" src={product.pictureUrl} alt="Foto del producto" />
            <div className="card-body d-flex flex-column align-items-center">
                <span>Detalles: {product.description}</span>
                <span>Precio: ${product.price}</span>
                <span>Cantidad en carrito: {product.qty}</span>
            </div>
            <button className="mb-3 px-1" onClick={() => removeFromCart(product)}>
                Remover <ImCross />
            </button>
        </div>
    )
}

export default CartDetail