import { BrowserRouter, Route } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./components/item_list/ItemListContainer"
import ItemDetailContainer from "./components/item_detail/ItemDetailContainer"
import Cart from "./components/cart/Cart"
import CustomComponent from "./components/context/cartContext"


const App = () => {

    return (
        <BrowserRouter>
            <CustomComponent>
                <div className="content">
                    <Header nombre="" apellido="" />
                    <Route path="/" component={ItemListContainer} exact />
                    <Route path="/category/:category" component={ItemListContainer} exact />
                    <Route path="/item/:id" component={ItemDetailContainer} exact />
                    <Route path="/cart" component={Cart} exact />
                    <Route path="/cart/checkout" component={Cart} exact />
                </div>
                <Footer />
            </CustomComponent>
        </BrowserRouter>
    )
}

export default App
