import NavBar from "./components/NavBar"
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'


const Header = ({ nombre, apellido, fadeInTime }) => {


    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { opacity: fadeInTime }
    })

    return (
        <animated.div style={fadeIn}>
            <header className="d-flex" id="header">
                <NavLink to="/" exact>
                    <img className="logo mx-4 mt-1" src='/logo.png' alt="logo" />
                </NavLink>
                <NavBar links={["Inicio", "Pinturas", "Dibujos"]} />
            </header>
            <div className="d-flex p-3">
                <p>{nombre} {apellido}</p>
            </div>
        </animated.div>)
}

export default Header