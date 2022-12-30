import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className=" bg-white md:grid grid-cols-5 gap-2 px-2 mr-5 ml-5 rounded-md  mt-10">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} />
          <h5>{product.price}</h5>
          <h5>{product.title}</h5>
          <button
            onClick={() => handleRemove(product.id)}
            className="text-white bg-red-600 px-8 py-1 rounded-sm"
          >
            Remove{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
