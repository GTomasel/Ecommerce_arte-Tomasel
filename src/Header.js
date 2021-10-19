import NavBar from "./components/NavBar"

const Header = ({nombre, apellido}) => {

    return(
        <>
            <header id="header">
                <h1 class="w-100">Galería de Arte - eShop</h1>
                <NavBar links={["Inicio","Contacto"]}/>
            </header>
            <div class="d-flex p-3">
                <p>{nombre} {apellido}</p>
            </div>
        </>
    )
}

export default Header