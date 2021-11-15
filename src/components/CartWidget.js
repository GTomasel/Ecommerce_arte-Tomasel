import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const CartWidget = ({ counter }) => {

    let mostrar = false

    if (counter > 0) {
        mostrar = true
    }

    return (
        <>
            <Link to="/cart" exact><BsCart /></Link>
            {mostrar && <span>{counter}</span>}
        </>
    )
}

export default CartWidget







