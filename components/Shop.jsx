import React from "react";

// next
import Link from "next/link";
import Head from "next/head"

// redux
import { useSelector, useDispatch } from "react-redux";
import { checkout, clear } from "../redux/shop/shopActions";

// components
import ShopPCard from "./common/ShopPCard";

// styles
import styles from "../styles/Shop.module.scss";

const Shop = () => {
  const { selectedItems, totalCount, totalPrice, isCheckout } = useSelector(
    (state) => state.shopState
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Cart</title>
      </Head>
      <div className={styles.cardsContainer}>
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (
              <ShopPCard key={item.id} product={item} />
          ))
        ) : (
          <div className={styles.clearDone}>
            <h1>Shopping Cart is Clear</h1>
            <Link href="/products">
              <a>back to shop</a>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.statusContainer}>
        <div className={styles.detailsContainer}>
          <div>
            <h2>total count: </h2>
            <p>{totalCount}</p>
          </div>
          <div>
            <h2>total price: </h2>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        {!(selectedItems.length === 0) && (
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispatch(checkout())}
            >
              CHECKOUT
            </button>
            <button className={styles.clear} onClick={() => dispatch(clear())}>
              CLEAR
            </button>
          </div>
        )}
        {selectedItems.length === 0 && isCheckout && (
          <h1 className={styles.checkoutSuccess}>Checked out Successfully!</h1>
        )}
      </div>
    </div>
  );
};

export default Shop;
