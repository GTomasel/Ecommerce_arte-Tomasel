import { useState,useEffect } from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador,setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock){
        setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1){
        setContador(contador - 1)
        }
    }

    return (
        <div className="p-3">
            <p>Stock {stock} unidades.</p>
            <p>Cantidad de items a comprar : {contador} </p>          
            <button className="m-1" onClick={restar}><AiOutlineMinusCircle/></button>  
            <button className="m-1" onClick={sumar}><AiOutlinePlusCircle/></button>  
            <button className="mx-3" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount