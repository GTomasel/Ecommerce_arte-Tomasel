import { cartContext } from '../context/cartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoTrashOutline } from 'react-icons/io5'
import { firestore } from "../../scripts/firebase"
import firebase from 'firebase/app'
import ItemDetail from "../item_detail/ItemDetail"
import Loading from "../misc/Loading"



export default function Cart() {

    const { cart, clear } = useContext(cartContext)

    const [checkoutID, setcheckoutID] = useState(0)
    const [userData, setuserData] = useState()
    const [checkout, setcheckout] = useState()
    const [emptyFields, setemptyFields] = useState(false)

    const clearCheckout = () => {
        setcheckoutID(null)
        clear()
    }

    const goToForm = () => {
        setcheckout(true)
    }

    const submit = (e) => {

        e.preventDefault()

        const user = {
            name: e.target.form[0].value,
            email: e.target.form[1].value,
            tel: e.target.form[2].value
        }

        if (user.name === "" || user.email === "" || user.tel === "") {

            setemptyFields(true)

        } else {

            const order = {
                buyer: user,
                items: cart,
                total: totalPrice,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            }

            const sendOrder = firestore.collection("orders").add(order)

            setcheckoutID("loading")

            sendOrder.then((resultado) => {
                setuserData(user)
                setcheckoutID(resultado.id)
            })
        }
    }

    let totalPrice = 0

    cart.forEach(prod => {
        totalPrice = totalPrice + (prod.price * prod.qty)
    })


    if (cart.length === 0) {
        return (
            <div className="d-flex flex-direction-column mx-3 justify-content-center">
                <p className="mx-2">El carrito está vacío..</p>
                <Link to="/" exact>
                    <button className="mx-3 px-1 buttonAlternative">Volver</button>
                </Link>
            </div>
        )
    } else if (checkoutID !== 0) {
        if (checkoutID === "loading") {
            return (
                <Loading text="Cargando..." />
            )
        } else {
            return (
                <div className="d-flex flex-column mx-3 align-items-center">
                    <p className="mx-2 mb-4 fs-5 text-success">¡Gracias por su compra! Su orden fué generada con éxito</p>
                    <table className="table table-dark table-striped w-50">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Número de orden</th>
                                <th scope="col">Precio total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{userData.name}</td>
                                <td>{userData.email}</td>
                                <td>{userData.tel}</td>
                                <td>{checkoutID}</td>
                                <td>${totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/" exact>
                        <button onClick={clearCheckout} className="mx-3 px-1 buttonAlternative">Terminar</button>
                    </Link>
                </div>
            )
        }
    } else if (checkout === true) {
        return (
            <>
                <form className="d-flex flex-column align-items-center">
                    <h3 className="mx-3 mb-4">Ingrese sus Datos</h3>
                    <div className="mb-2 formField">
                        <input type="text" class="form-control" placeholder="Nombre completo" />
                    </div>
                    <div className="mb-2 formField">
                        <input type="text" class="form-control" placeholder="E-mail" />
                    </div>
                    <div className="mb-4 formField">
                        <input type="text" class="form-control" placeholder="Teléfono" />
                    </div>
                    <button type="submit" onClick={submit}>Enviar</button>
                    {emptyFields ? <span className="mt-3 text-danger">Por favor complete todos los campos para continuar</span> : ""}
                </form>
            </>
        )
    } else {
        return (
            <div className="d-flex flex-column align-items-center">
                <h1 className="mx-3 mb-4">Detalle de sus compras</h1>
                <button className="mt-2 mb-3 px-1 buttonAlternative" onClick={() => clear()}>
                    Vaciar carrito<IoTrashOutline />
                </button>
                <div className="d-flex">
                    {cart.map((e) => {
                        return (
                            <ItemDetail key={e.id} productDetail={e} inCart={true} />
                        );
                    })}
                </div>
                <p className="total mt-4">TOTAL: ${totalPrice}</p>
                <button onClick={goToForm} className="mx-3 px-1 buttonAlternative">Finalizar compra</button>
            </div>
        );
    }
}