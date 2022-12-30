import React from "react";
import Products from "../componnents/Products";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold">Welcome to Redux Toollkit Store</h1>

      <h1>Products</h1>
      <Products />
    </div>
  );
};

export default Home;
