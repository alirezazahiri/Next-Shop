import Store from "../components/Store";

//
import axios from "axios";

const products = ({ products }) => {
  return <Store products={products}/>;
};

export const getServerSideProps = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  return {
    props: { products },
  };
};

export default products;
