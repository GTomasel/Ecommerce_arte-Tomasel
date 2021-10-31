import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"




const App = () => {
    return(
        <>
            <Header nombre="Gabriel" apellido="Tomasel"/>
            <ItemListContainer greeting="Bienvenido!!!"/>
            <ItemDetailContainer id={1}/>
            {/* <Footer/> */}
        </>
    )
}

export default App
