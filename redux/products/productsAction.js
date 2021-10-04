import axios from "axios"

const fetchProductsRequest = () => ({ type: "FETCH_PRODUCTS_REQUEST" });
const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products,
});
const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_ERROR",
  payload: error,
});

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
    .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export default fetchProducts;