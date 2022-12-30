import { configureStore } from "@reduxjs/toolkit";
import cartReducur from "./cartSlice";
import ProductReducur from "./productSlice"
import  ProductsdetailsRedusur from "./productsdetailsSlice"

const store = configureStore({
  reducer: {
    cart: cartReducur,
    product:ProductReducur,
    productsid:ProductsdetailsRedusur
    
    

    
  },
});
export default store;
