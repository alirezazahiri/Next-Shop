import React from "react";

// next 
import Head from "next/head"

// Redux
import { useSelector } from "react-redux";

// Components
import StorePCard from "./common/StorePCard";

// styles 
import styles from "../styles/Store.module.scss";

const Store = () => {
  const {products} = useSelector(state => state.productsState)
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