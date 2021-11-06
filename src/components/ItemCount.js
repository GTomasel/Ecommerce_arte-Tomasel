import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ItemCount = ({ stock, initial, onAdd, visible }) => {

    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    if (visible === true) {
        return (
            <div className="p-3 d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center mb-3 mt-2">
                    <button className="m-1" onClick={restar}><AiOutlineMinusCircle /></button>
                    <p className="mb-0">{contador}</p>
                    <button className="m-1" onClick={sumar}><AiOutlinePlusCircle /></button>
                </div>
                <button className="mx-3" onClick={() => onAdd(contador)}>Agregar al carrito</button>
            </div>
        )
    } else {
        return (
            <div className="p-3 d-flex flex-column align-items-center">
                <Link to="/cart" exact>
                    <button className="mx-3 mb-3">Terminar la compra</button>
                </Link>
                <Link to="/" exact>
                    <p className="mx-3 text-light">Volver</p>
                </Link>
            </div>
        )
    }
}

export default ItemCount