import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const selector = useSelector((state)=> state.cart);
  return (
    <div >
      <div className=" bg-indigo-600 px-5 py-1 text-white" >

        <h1> REDUX STORE</h1>
      </div>
      <div className="space-x-5 bg-gray-400 text-white font-bold flex justify-end ">
        <Link to="/">home</Link>
        <Link to="Cart">cart</Link>

        <h1>Cart item :{selector.length} </h1>
      </div>
    </div>
  );
}
export default Navbar;
