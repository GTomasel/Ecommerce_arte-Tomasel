import { cartContext } from './cartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoTrashOutline } from 'react-icons/io5'
import { firestore } from "../firebase"
import firebase from 'firebase/app'
import CartDetail from "./CartDetail"


export default function Cart() {

    const { cart, clear } = useContext(cartContext)

    const [checkoutID, setcheckoutID] = useState(0)
    const [userData, setuserData] = useState()

    const clearCheckout = () => {
        setcheckoutID(null)
        clear()
    }

    const checkout = () => {
        const user = {
            name: "Juan Carlos",
            email: "quehaces_juanca@gmail.com",
            tel: 1122334455
        }

        const order = {
            buyer: user,
            items: cart,
            total: totalPrice,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const sendOrder = firestore.collection("orders").add(order)

        sendOrder.then((resultado) => {
            setuserData(user)
            setcheckoutID(resultado.id)
        })
    }

    let totalPrice = 0

    cart.forEach(prod => {
        totalPrice = totalPrice + (prod.price * prod.qty)
    })


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
    } else if (checkoutID !== 0) {
        return (
            <>
                <div className="d-flex flex-column mx-3 align-items-center">
                    <p className="mx-2">¡Gracias por su compra! Su orden fué generada con éxito</p>
                    <table className="table table-dark table-striped w-50">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Número de orden</th>
                                <th scope="col">Precio total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{userData.name}</td>
                                <td>{userData.email}</td>
                                <td>{checkoutID}</td>
                                <td>${totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/" exact>
                        <button onClick={clearCheckout} className="mx-3 px-1 buttonAlternative">Terminar</button>
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
                    {cart.map((e) => {
                        return (
                            <>
                                <CartDetail key={e.id} product={e} />
                            </>
                        );
                    })}
                </div>
                <p className="total mt-4">TOTAL: ${totalPrice}</p>
                <button onClick={checkout} className="mx-3 px-1 buttonAlternative">Finalizar compra</button>
            </div>
        );
    }
}