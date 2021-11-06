import productsJSON from "../products.json"


const GetItems = new Promise((res) => {
    setTimeout(() => {
        res(productsJSON)
    }, 2000)

})

export default GetItems



