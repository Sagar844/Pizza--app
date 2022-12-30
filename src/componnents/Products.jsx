import React from "react";
import { useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../store/productSlice";
import { STATUS } from "../store/productSlice";
import Loading from "./Loading";
import {IoIosWifi} from "react-icons/io"
import { Link } from "react-router-dom";

function Products() {
  
  const dispatch = useDispatch();

  const { Data: products, stutus,id } = useSelector((state) => state.product);

  // const [Products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchproducts());

    // const fatchproducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fatchproducts();
  }, []);

  const handleAddtocart = (product) => {
    dispatch(add(product));
  };
  if (stutus === STATUS.LOADING) {
    return (
      <div >
        <Loading/>
      </div>
    );
  }

  if (stutus === STATUS.ERROR) {
    return (
      <div className=" text-3xl  grow-1 flex items-center mt-52 mb-20 justify-center">  <IoIosWifi/>somthing went worng....</div>
    );
  }
  return (
    <div className=" bg-white md:grid grid-cols-5 gap-2 px-2 mr-5 ml-5 rounded-md  mt-01">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={"/product/" + id}>
          <img className=" h-40 rounded-md  " src={product.image} />
          </Link>
          <h1>{product.price}</h1>
          <h1 className="font-bold ">{product.title}</h1>
          <button
            onClick={() => handleAddtocart(product)}
            className="bg-indigo-600 px-8 py-1 rounded-sm text-white"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
