import React from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import shop from "../assets/icons/shop.svg";

// redux
import { useSelector } from "react-redux";

// styles 
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const state = useSelector((state) => state.shopState);
  return (
    <header className={styles.container}>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/shopping-cart">
        <a className={styles.cartContainer}>
          <Image src={shop} alt="shopping cart" />
          <span>{state.totalCount}</span>
        </a>
      </Link>
    </header>
  );
};

export default Navbar;
