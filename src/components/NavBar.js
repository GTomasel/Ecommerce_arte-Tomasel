import CartWidget from "./CartWidget"

const NavBar = ({links}) => {
    return(
        <>
            <nav class="d-flex justify-content-center w-100">
                <a href="#">{links[0]}</a>
                <a href="#">{links[1]}</a>
                <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar

