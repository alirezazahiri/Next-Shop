import axios from "axios"

export const fetchProductsRequest = () => ({ type: "FETCH_PRODUCTS_REQUEST" });

export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_ERROR",
  payload: error,
});

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsRequest())
    axios.get("https://fakestoreapi.com/products")
    .then(response => dispatch(fetchProductsSuccess(response.data)))
    .catch(error => dispatch(fetchProductsFailure(error.message)))
  }
}