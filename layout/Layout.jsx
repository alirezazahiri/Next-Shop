import React from "react";
import Navbar from "../components/Navbar";
import useProductsEffect from "../hooks/useProductsEffect"

const Layout = ({ children }) => {
  useProductsEffect()
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
