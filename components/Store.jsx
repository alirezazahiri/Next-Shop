import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../redux/products/productsAction";

const Store = () => {
  const { products, loading, error } = useSelector(
    (state) => state.productsState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return "Loading ...";
  return (
    <div>
      {products.map(({ id, title }) => (
        <h1 key={id}>{title}</h1>
      ))}
    </div>
  );
};

export default Store;
