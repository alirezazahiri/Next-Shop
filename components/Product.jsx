import React from "react";
import { useSelector } from "react-redux";

// next
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

// styles
import styles from "../styles/Product.module.scss";

const Product = () => {
  const { products } = useSelector((state) => state.productsState);
  const router = useRouter();
  const index = Number(router.asPath.split("/").reverse()[0]) - 1;
  const { image, title, description, category, price } = products[index]
    ? products[index]
    : {
        image: undefined,
        title: undefined,
        description: undefined,
        category: undefined,
        price: undefined,
      };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} width={200} />
      </div>
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>
          Category: <span>{category}</span>
        </h3>
      </div>
      <div className={styles.footer}>
        <p>${price}</p>
        <Link href="/products">
          <a>Back</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
