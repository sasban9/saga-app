import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";
import { Button } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { productList } from "../redux/product/action";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector(state => state.productList);
  console.warn("data in main component ", data);
  // const product = {
  //   name: "iPhonepe",
  //   category: "smartphone",
  //   price: 999,
  //   color: "red",
  // };

  useEffect(() => {
    dispatch(productList())
  }, [dispatch])

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* <Button
          variant="outlined"
          startIcon={<ShoppingCartIcon />}
          onClick={() => dispatch(addToCart(product))}
        >
          {" "}
          ADD TO cart
        </Button>
        <Button
          variant="outlined"
          startIcon={<RemoveShoppingCartIcon />}
          onClick={() => dispatch(removeFromCart(product))}
        >
          {" "}
          REMOVE FROM cart
        </Button> */}
      </div>
      <div className="product-container" style={{display:"flex", flexWrap: "wrap", justifyContent:"center"}}>
        {data.map((item) => (
          <div className="produt-item" key={item.id} style={{width:348, overflow:"hidden",margin:12,boxShadow: "0 4px 8px #ccc", textAlign:"center", border: "solid 1px #ccc", padding: 6}}>
            
            <div>
             <b style={{fontSize:30}}>{item.name}</b>
            </div>
            <div style={{height:400, display:"flex"}}><img alt="" src={item.photo} style={{maxHeight:400,maxWidth:"100%",margin:"auto"}} /></div>
            
            <div style={{background:item.color}}>
              <span style={{mixBlendMode:"difference", color:"#888", lineHeight:3}}>color:
              {" "}{item.color}</span>
              
            </div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div style={{display:"flex", justifyContent:"space-between", padding: 10}}>
              <Button variant="outlined" onClick={() => dispatch(addToCart(item))}>Add </Button>
              <Button variant="outlined" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
            </div>
          </div>
        ))}
      </div>
      
      {/* <div>
        <Button variant="outlined" onClick={() => dispatch(productList())}>
          {" "}
          Product List
        </Button>
      </div> */}
    </div>
  );
}

export default Main;
