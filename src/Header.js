import NavBar from "./components/NavBar"
import { NavLink } from 'react-router-dom'


const Header = ({ nombre, apellido }) => {

    return (
        <>
            <header className="d-flex" id="header">
                <NavLink to="/" exact>
                    <img className="logo mx-4 mt-1" src='/logo.png' alt="logo"/>
                </NavLink>
                <NavBar links={["Inicio", "Pinturas", "Dibujos"]} />
            </header>
            <div className="d-flex p-3">
                <p>{nombre} {apellido}</p>
            </div>
        </>
    )
}

export default Header