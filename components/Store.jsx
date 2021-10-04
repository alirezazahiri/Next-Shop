import React, { useEffect } from "react";

// Redux
import { useDispatch /*, useSelector */ } from "react-redux";
import { fetchProductsSuccess } from "../redux/products/productsAction";

// Components
import StorePCard from "./common/StorePCard";

const Store = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsSuccess(products));
    console.log(products)
  }, []);

  return (
    <div>
      {products && products.map((product) => (
        <StorePCard key={product.id} {...product} />
      ))}
    </div>
  );
};



export default Store;
