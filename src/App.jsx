import React from "react";
import Navbar from "./componnents/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductsDetails from "./pages/ProductsDetails";
import Download from "./pages/Download";

function App() {
  return (
    <div className="h-screen  flex flex-col space-y-5">
      <Provider store={store}> 
       <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Download></Download>
      
      </Provider>
    </div>
  );
}

export default App;
