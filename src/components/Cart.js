import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../redux/action";
import { Button } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
    const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  let amount = cartData.length && cartData.map(item => item.price).reduce((prev,next)=>prev+next);
  amount = Math.floor(amount*100)/100
  const discount = Math.floor(amount*10)/100

  return (
    <>
      <h2>Cart</h2>
      {(cartData.length===0) && <div style={{height:200, lineHeight:"200px", fontSize:30, background:"salmon"}}>Cart is empty</div>}
        
      {cartData.length>0 && <div
        className="cart-page-container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <table style={{ minWidth: 800, textAlign: "left" }}>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Color</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cartData.map((item) => (
            <tr key={item.id+Math.random()}>
              <td>
                {item.brand}
                <br />
                {item.name}
              </td>
              <td>
                <img alt="" src={item.photo} height="100" />
              </td>
              <td><div style={{height:50,width:50,background:item.color}}></div></td>
              <td>{item.category}</td>
              <td>1</td>
              <td style={{ textAlign: "right" }}>{item.price.toFixed(2)}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <div>
          <table style={{ fontSize: "1.1rem", minWidth: 400 }}>
            <tbody>
            <tr>
              <td colSpan={4}></td>
              <th>Amount</th>
              <td>{amount.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <th>Discount</th>
              <td>{discount.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <th>Tax</th>
              <td>0.00</td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <th>Total</th>
              <td>{(amount - discount).toFixed(2)}</td>
            </tr></tbody>
          </table>
          <br/><br/>
          <Button
          variant="outlined"
          startIcon={<RemoveShoppingCartIcon />}
          onClick={() => dispatch(emptyCart())}
        >
          {" "}
          empty cart
        </Button>
        </div>
      </div>}
    </>
  );
};

export default Cart;
