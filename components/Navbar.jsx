import React from "react";
import Link from "next/link";
import Image from "next/image"

// icons
import shop from "../assets/icons/shop.svg";

// redux
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.shopState);
  return (
    <header>
      <Link href="/products">
        <a>
          <h1>Products</h1>
        </a>
      </Link>
      <Link href="/shopping-cart">
        <a>
          <Image src={shop} alt="shopping cart"/>
          <span>{state.totalCount}</span>
        </a>
      </Link>
    </header>
  );
};

export default Navbar;
