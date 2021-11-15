import { cartContext } from './cartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoTrashOutline } from 'react-icons/io5'
import CartDetail from "./CartDetail"


export default function Cart() {


    const { cart, clear } = useContext(cartContext)

    let totalPrice = 0

    if (cart.length === 0) {
        return (
            <>
                <div className="d-flex mx-3 align-items-center">
                    <p className="mx-2">El carrito está vacío..</p>
                    <Link to="/" exact>
                        <button className="mx-3 px-1 buttonAlternative">Volver</button>
                    </Link>
                </div>
            </>
        )
    } else {
        return (
            <div className="mx-5">
                <h1 className="mx-3 mb-4">Detalle de sus compras</h1>
                <button className="mt-2 mb-3 px-1 buttonAlternative" onClick={() => clear()}>
                    Vaciar carrito<IoTrashOutline />
                </button>
                <div className="d-flex">
                    {cart.map((e, i) => {
                        totalPrice = totalPrice + (e.price * e.qty)
                        return (
                            <>
                                <CartDetail product={e} />
                            </>
                        );
                    })}
                </div>
                <p className="total mt-4">TOTAL: ${totalPrice}</p>
            </div>
        );
    }
}