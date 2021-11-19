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

    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center mb-3 mt-2">
                <button className="mx-3" onClick={restar}><AiOutlineMinusCircle /></button>
                <p className="mb-0">{contador}</p>
                <button className="mx-3" onClick={sumar}><AiOutlinePlusCircle /></button>
            </div>
            <div className="d-flex flex-column align-items-center">
                <button className="mb-4 px-1" onClick={() => onAdd(contador)}>Agregar al carrito</button>

                {visible && <Link to="/cart" exact><button className="mb-2 px-1">Ir al carrito</button></Link>}

                <Link to="/" exact>
                    <p className="text-light">Volver</p>
                </Link>
            </div>
        </div>
    )
}

export default ItemCount