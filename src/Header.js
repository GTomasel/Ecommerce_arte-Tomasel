import NavBar from "./components/NavBar"

const Header = ({nombre, apellido}) => {

    return(
        <>
            <header id="header">
                <h1 className="w-100">Galería de Arte - eShop</h1>
                <NavBar links={["Inicio","Contacto"]}/>
            </header>
            <div className="d-flex p-3">
                <p>{nombre} {apellido}</p>
            </div>
        </>
    )
}

export default Header