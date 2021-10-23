import { useState,useEffect } from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ItemCount = ({stock, initial}) => {

    const [contador,setContador] = useState(initial)
    const [cantStock,setcantStock] = useState(stock)
    const [carrito,setCarrito] = useState(0)


    const sumar = () => {
        if (contador < cantStock){
        setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1){
        setContador(contador - 1)
        }
    }

    const agregar = () => { 
        if (cantStock > 0){
        setcantStock(cantStock - contador)
        setContador(initial)
        setCarrito(carrito + contador)
        }
    }

    return (
        <div class="p-3">
            <p>Stock {cantStock} unidades.</p>
            <p>Cantidad de items a comprar : {contador} </p>          
            <button class="m-1" onClick={restar}><AiOutlineMinusCircle/></button>  
            <button class="m-1" onClick={sumar}><AiOutlinePlusCircle/></button>  
            <button class="mx-3" onClick={agregar}>Agregar al carrito</button>
            <p class="pt-4">Carrito: {carrito}</p>
        </div>
    )
}

export default ItemCount