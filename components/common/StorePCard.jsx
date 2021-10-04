// Next
import Link from "next/link";
import Image from "next/image";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increase,
  decrease,
  removeItem,
} from "../../redux/shop/shopActions";

// icons
import trash from "../../assets/icons/trash.svg";

// styles
import styles from "../../styles/StorePCard.module.scss";

// services
import truncate from "../../services/truncate";

const StorePCard = ({ product }) => {
  const { id, title, price, image } = product;
  const { selectedItems } = useSelector((state) => state.shopState);
  const dispatch = useDispatch();
  const item = selectedItems.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;
  return (
    <div className={styles.container}>
      <img
        className={styles.productImage}
        width={150}
        src={image}
        alt={title}
      />
      <div className={styles.detailsContainer}>
        <div className={styles.textContainer}>
          <h1>{truncate(title)}</h1>
          <p>${price}</p>
        </div>
        <div className={styles.buttonsContainer}>
          <Link href={`/products/${id}`}>
            <a>Details</a>
          </Link>
          <div className={styles.actionsContainer}>
            {!quantity && (
              <button onClick={() => dispatch(addItem(product))}>
                Add to cart
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
            {quantity > 1 && <p>{quantity}</p>}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePCard;
