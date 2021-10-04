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

const StorePCard = ({ product }) => {
  const { id, title, price, image } = product;
  const {selectedItems} = useSelector((state) => state.shopState);
  const dispatch = useDispatch();
  const item = selectedItems.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;
  return (
    <div>
      <img width={150} src={image} alt={title} />
      <div>
        <div>
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
        <div>
          <Link href={`/products/${id}`}>
            <a>Details</a>
          </Link>
          <div>
            {!quantity && (
              <button
                onClick={() => dispatch(addItem(product))}
              >
                Add to cart
              </button>
            )}
            {quantity > 0 && (
              <button
                onClick={() => dispatch(increase(id))}
              >
                +
              </button>
            )}
            {quantity > 1 && (
              <button onClick={() => dispatch(decrease(id))}>-</button>
            )}
            {quantity === 1 && (
              <button onClick={() => dispatch(removeItem(id))}>
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
