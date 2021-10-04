import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Product = () => {
  const { products } = useSelector((state) => state.productsState);
  const router = useRouter();
  const index = Number(router.asPath.split("/").reverse()[0]) - 1;
  const { title, description, category, price } = products[index];

  return (
    <div>
      <img src="" alt="" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{category}</h3>
      </div>
      <div>
        <p>${price}</p>
        <button onClick={() => router.push("/products")}>back</button>
      </div>
    </div>
  );
};

export default Product;
