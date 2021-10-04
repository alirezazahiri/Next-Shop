// Next
import Link from "next/link";

const StorePCard = ({ id, title, price, image }) => {
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
          <div>{/* buttons */}</div>
        </div>
      </div>
    </div>
  );
};

export default StorePCard;
