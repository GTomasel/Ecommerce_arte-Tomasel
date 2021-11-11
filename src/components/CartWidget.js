import { BsCart } from 'react-icons/bs'
import { useContext } from 'react'
import { cartContext } from './cartContext'

const CartWidget = () => {

    const { cart } = useContext(cartContext)
    

    return (
        <>
            <BsCart />
        </>
    )
}

export default CartWidget