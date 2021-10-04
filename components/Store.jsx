import React, { useEffect } from "react";

// Redux
import { useDispatch /*, useSelector */ } from "react-redux";
import { fetchProductsSuccess } from "../redux/products/productsAction";

// Components
import StorePCard from "./common/StorePCard";

// styles 
import styles from "../styles/Store.module.scss";

const Store = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsSuccess(products));
  }, []);

  return (
    <div className={styles.container}>
      {products && products.map((product) => (
        <StorePCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Store;