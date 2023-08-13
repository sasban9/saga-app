import { PRODUCT_LIST, PRODUCT_SEARCH } from "../constants"

export const productList = () => {

    return {
        type: PRODUCT_LIST,
        // data: "apple"
    }
}
export const productSearch = (query) => {

    return {
        type: PRODUCT_SEARCH,
        query
    }
}