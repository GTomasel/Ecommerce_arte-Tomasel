import { createContext, useState } from "react"

export const cartContext = createContext()

const { Provider } = cartContext


const CustomComponent = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, amount) => {

        const findDuplicate = cart.find(e => e.id === product.id)

        if (findDuplicate == null) {
            setCart([product])

        } else {
            alert("El producto ya se encuentra en el carrito")
        }
    }



    const contextValue = {
        cart: cart,
        addToCart: addToCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomComponent





// const isInCart = (id) => {
//     return cart.find(item => item.id === id)
// }

// const addToCart = (id, branch, title, pictureUrl, qty, price) => {

//     if (isInCart(id)) {
//         setCart(cart.map(item => {
//             if (item.id === id) {
//                 item.qty += qty
//             }
//             return item
//         }))
//     }
//     else {
//         setCart([...cart, {id, branch, title, pictureUrl, qty, price}])
//     }
// }