import Product from "../../components/Product.jsx";
import { useSelector } from "react-redux";
const productPage = (props) => {
  const state = useSelector(state => state.productsState)
  console.log(state)
  return <Product />;
};

export default productPage;
