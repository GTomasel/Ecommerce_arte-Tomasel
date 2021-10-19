import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"



const App = () => {
    return(
        <>
            <Header nombre="Gabriel" apellido="Tomasel"/>
            <ItemListContainer greeting="Bienvenido!!!"/>
            <Footer/>
        </>
    )
}

export default App
