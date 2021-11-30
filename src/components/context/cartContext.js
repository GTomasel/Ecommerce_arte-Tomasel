import { createContext, useState } from "react"

export const cartContext = createContext()

const { Provider } = cartContext


const CustomComponent = ({ children }) => {

    let cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"))
    let qtyFromLocalStorage = localStorage.getItem("cartQty")

    if (cartFromLocalStorage === null){
        cartFromLocalStorage = []
        qtyFromLocalStorage = 0
    }

    const [cart, setCart] = useState(cartFromLocalStorage)
    const [quantity, setQuantity] = useState(qtyFromLocalStorage)


    const addToCart = (product, amount) => {

        const findIfExist = cart.find(e => e.id === product.id)

        const cartArray = cart

        let cartFilter

        setQuantity(quantity + amount)
        localStorage.setItem("cartQty", quantity + amount)


        if (findIfExist == null) {

            product.qty = amount

            cartArray.push(product)

            setCart(cartArray)
            let cartJSON = JSON.stringify(cartArray)
            localStorage.setItem("cart", cartJSON)


        } else {

            cartFilter = cartArray.filter(exist)

            function exist(prod) {
                return prod.id !== findIfExist.id
            }

            findIfExist.qty = findIfExist.qty + amount

            cartFilter.push(findIfExist)

            setCart(cartFilter)
            let cartJSON = JSON.stringify(cartFilter)
            localStorage.setItem("cart", cartJSON)

        }

    }

    const removeFromCart = (product) => {

        const findIfExist = cart.find(e => e.id === product.id)
        let cartFilter

        setQuantity(quantity - product.qty)
        localStorage.setItem("cartQty", quantity - product.qty)

        cartFilter = cart.filter(exist)

        function exist(prod) {
            return prod.id !== findIfExist.id
        }

        setCart(cartFilter)
        let cartJSON = JSON.stringify(cartFilter)
        localStorage.setItem("cart", cartJSON)

    }

    const clear = () => {
        setCart([])
        setQuantity(0)
        localStorage.clear()
    }

    const contextValue = {
        cart: cart,
        addToCart: addToCart,
        quantity: quantity,
        removeFromCart: removeFromCart,
        clear: clear
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomComponent





