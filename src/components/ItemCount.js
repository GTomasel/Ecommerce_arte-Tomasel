import { useState } from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ItemCount = ({ stock, initial, onAdd }) => {

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
        <div className="p-3 d-flex flex-column">
            <p>Stock {stock} unidades</p>
            <div className="d-flex justify-content-center align-items-center mb-3 mt-2">
                <button className="m-1" onClick={restar}><AiOutlineMinusCircle /></button>
                <p className="mb-0">{contador}</p>
                <button className="m-1" onClick={sumar}><AiOutlinePlusCircle /></button>
            </div>
            <button className="mx-3" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount