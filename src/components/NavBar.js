import CartWidget from "./CartWidget"
import { NavLink } from 'react-router-dom'
import { cartContext } from './cartContext'
import { useContext } from 'react'


const NavBar = ({ links }) => {

    const { quantity } = useContext(cartContext)

    return (
        <>
            <nav className="d-flex justify-content-end w-100 mx-5">
                <NavLink to="/" exact>{links[0]}</NavLink>
                <NavLink to="/category/pintura" exact>{links[1]}</NavLink>
                <NavLink to="/category/dibujo" exact>{links[2]}</NavLink>
                <CartWidget counter={quantity} />
            </nav>
        </>
    )
}

export default NavBar

