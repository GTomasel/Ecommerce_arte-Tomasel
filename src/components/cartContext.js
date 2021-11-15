import { createContext, useState } from "react"

export const cartContext = createContext()

const { Provider } = cartContext


const CustomComponent = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addToCart = (product, amount) => {

        const findIfExist = cart.find(e => e.id === product.id)

        const cartArray = cart

        let cartFilter

        setQuantity(quantity + amount)


        if (findIfExist == null) {

            product.qty = amount

            cartArray.push(product)

            setCart(cartArray)


        } else {

            cartFilter = cartArray.filter(exist)

            function exist(prod) {
                return prod.id !== findIfExist.id
            }

            findIfExist.qty = findIfExist.qty + amount

            cartFilter.push(findIfExist)

            setCart(cartFilter)

        }

    }

    const removeFromCart = (product) => {

        const findIfExist = cart.find(e => e.id === product.id)
        let cartFilter

        setQuantity(quantity - product.qty)

        cartFilter = cart.filter(exist)

        function exist(prod) {
            return prod.id !== findIfExist.id
        }

        setCart(cartFilter)

    }

    const clear = () => {
        setCart([]) 
        setQuantity(0)
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





