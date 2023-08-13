import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants"

export const addToCart = (data) => {
    // console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeFromCart = (data) => {
    // console.warn("REMOVE_FROM_CART is called", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}
export const emptyCart = () => {
    // console.warn("EMPTY_CART is called")
    return {
        type: EMPTY_CART
    }
}