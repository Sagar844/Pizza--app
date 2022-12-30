import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../store/productSlice";
import { IoIosWifi } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { fetchid } from "../store/productsdetailsSlice";

function ProductsDetails() {
  const dispatch = useDispatch();

  const { Data: products, stutus, id } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchid(id));
  }, []);

  if (stutus === STATUS.ERROR) {
    return (
      <div className=" text-3xl  grow-1 flex items-center mt-52 mb-20 justify-center">
        {" "}
        <IoIosWifi />
        somthing went worng....
      </div>
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
        </div>
      ))}
    </div>
  );
}

export default ProductsDetails;
