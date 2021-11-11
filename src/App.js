import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CustomComponent from "./components/cartContext"
import { BrowserRouter, Route } from "react-router-dom"


const App = () => {

    return (
        <BrowserRouter>
            <CustomComponent>
                <Header nombre="" apellido="" />
                <Route path="/" component={ItemListContainer} exact />
                <Route path="/category/:category" component={ItemListContainer} exact />
                <Route path="/item/:id" component={ItemDetailContainer} exact />
                <Footer />
            </CustomComponent>
        </BrowserRouter>
    )
}

export default App
