import React, { useEffect } from "react";

// next 
import Head from "next/head"

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
      <Head>
        <title>Products</title>
      </Head>
      {products && products.map((product) => (
        <StorePCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Store;