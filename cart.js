import React, {useState} from "react"
import ProductCard from "../components/ProductCard"
import CartCard from "../components/CartCard";
const data=[
    {
        label:"idli",
        price:10,
    },
    {
        label:"vada",
        price:10,
    },
    {
        label:"dosa",
        price:10,
    },
    {
        label:"poori",
        price:10,
    },
    {
        label:"pongal",
        price:20,
    },
    {
        label:"chapathi",
        price:10,
    },
    {
        label:"parota",
        price:20,
    },
    {
        label:"tea",
        price:10,
    },
    {
        label:"coffee",
        price:10,
    },
]
function Cart() {
    const [cart,setCart]=useState([]);
    function handleChange(item={}) {
        let cartCopy=[...cart];
        if(item.label) {
            cartCopy.push(item);
        }
        setCart(cartCopy);
    }
    function checkCartStatus(item={}){
        let status=false;
        if(item.label){
            status=cart.filter((_data)=> _data.label===item.label).length> 0 
            ? true
            : false;
        }
        return status;
    }
return (
<div className="container">
<div className="container-fluid">
    <div className="row">
    <div className="col-lg-8">
        {data.map((element, index) => (
        <ProductCard   
        disabled={checkCartStatus(element)} 
        data={element}
        onChange={handleChange}
        />
        ))}
    </div>
     <div className="col-lg-4">
     {cart.map((d,i)=>(
        <CartCard data={d} />
     ))}
        </div>
    </div>
 </div>
 </div>
  
 );  
}
export default Cart