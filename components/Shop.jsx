import React from "react";

// redux
import { useSelector } from "react-redux";
import ShopPCard from "./common/ShopPCard";

// styles
import styles from "../styles/Shop.module.scss";

const Shop = () => {
  const { selectedItems } = useSelector((state) => state.shopState);

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {selectedItems.map((item) => (
          <ShopPCard key={item.id} product={item} />
        ))}
      </div>
      <div className={styles.statusContainer}>Status Card</div>
    </div>
  );
};

export default Shop;
