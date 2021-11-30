import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'


const Footer = () => {

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { opacity: 1000 }
    })

    return (
        <animated.div style={fadeIn}>
            <footer className="d-flex align-items-center w-100 justify-content-evenly">
                <div className="fs-2">
                    <Link to={{ pathname: "https://www.facebook.com/ArteMariaCelinaGioia" }} target="_blank" ><ImFacebook2 className="mx-2" /></Link>
                    <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank" ><BsInstagram className="mx-2" /></Link>
                </div>
                <span>Gabriel Tomasel 2021.</span>
                <div className="d-flex flex-column">
                    <NavLink to="/" exact>Inicio</NavLink>
                    <NavLink to="/category/pintura" exact>Pinturas</NavLink>
                    <NavLink to="/category/dibujo" exact>Dibujos</NavLink>
                </div>
            </footer>
        </animated.div>
    )
}

export default Footer