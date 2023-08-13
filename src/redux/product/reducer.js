import {  SET_PRODUCT_LIST } from "../constants";
// let data = []
export const productList = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.warn("PRODUCT_LIST condition matched", action);
    //   // some logic
    //   return [action.data];
    case SET_PRODUCT_LIST:
      console.warn("SET_PRODUCT_LIST condition matched", action);
      // some logic
      return [...action.data];
    default:
      return data;
  }
};
