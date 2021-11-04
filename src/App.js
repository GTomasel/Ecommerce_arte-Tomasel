import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route } from "react-router-dom"


const App = () => {

    return (
        <BrowserRouter>
            <Header nombre="" apellido=""/>

            <Route path="/" component={ItemListContainer} exact />
            <Route path="/category/:category" component={ItemListContainer} exact />
            <Route path="/item/:id" component={ItemDetailContainer}/>

            <Footer />
        </BrowserRouter>
    )
}

export default App
