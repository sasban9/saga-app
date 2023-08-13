import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productList } from "./product/reducer";

export default combineReducers({
    cartData,
    productList
})