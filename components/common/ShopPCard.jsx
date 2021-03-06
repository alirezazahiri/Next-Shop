import React from "react";

// next
import Image from "next/image";

// redux
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../../redux/shop/shopActions";

// icons
import trash from "../../assets/icons/trash.svg";

// styles
import styles from "../../styles/ShopPCard.module.scss";
import truncate from "../../services/truncate";

const ShopPCard = ({ product }) => {
  const { id, image, title, price, quantity } = product;
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className="bg-white">
        <img
          className={styles.productImage}
          src={image}
          width={60}
          alt={title}
        />
      </div>

      <div className={styles.data}>
        <h3>{truncate(title)}</h3>
        <p>${price}</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 && (
          <button
            className={styles.smallButton}
            onClick={() => dispatch(decrease(id))}
          >
            -
          </button>
        )}
        {quantity === 1 && (
          <button
            className={styles.smallButton}
            onClick={() => dispatch(removeItem(id))}
          >
            <Image src={trash} alt="trash" />
          </button>
        )}
        {quantity > 0 && (
          <button
            className={styles.smallButton}
            onClick={() => dispatch(increase(id))}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default ShopPCard;
