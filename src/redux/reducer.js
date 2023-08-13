import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";
// let data = []
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition matched", action);
      // some logic
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART condition matched", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingItems = data.filter(item => item.id!==action.data)
      return [...remainingItems];
    case EMPTY_CART:
      console.warn("EMPTY_CART condition matched", action);
      return [];
    default:
      return [];
  }
  // if(action.type === ADD_TO_CART){

  // } else {
  //     return "no action called"
  // }
  // return true
};
