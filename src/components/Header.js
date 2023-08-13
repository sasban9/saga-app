import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/product/action";

const Header = () => {
    const result = useSelector(state => state.cartData);
    const dispatch = useDispatch();
    console.warn("data in header", result)
    return (
        <header style={{borderBottom:"solid 1px salmon",height:100, display:"flex", justifyContent: "space-between"}}>
            <Link to="/"><div><img alt="" src="https://grocurv.com/media/original_images/Zymrat_FmTC4bC.png" height="100" /></div></Link>
            <div className="search-box" style={{width:600}}>
                <input type="text" onChange={(event) => {dispatch(productSearch(event.target.value))}} placeholder="Search Products..." style={{padding:10, fontSize:20, marginTop:30, width:"100%"}} />
            </div>
            <Link to='/cart'>
            <div className="cart-div" style={{position:"relative",float:"right", margin:"2rem"}}>
                <span style={{color:"white",background:"green",height:30,width:30,borderRadius:"100%",position:"absolute",top:"-10px",right:-10}}>{result.length}</span>
                <img src="https://img.freepik.com/free-icon/shopping-cart-checkered-design_318-50865.jpg?w=360" alt="" style={{width:40,mixBlendMode:"multiply"}} />
            </div></Link>
        </header>
    )
}

export default Header;