export const fetchProductsRequest = () => ({ type: "FETCH_PRODUCTS_REQUEST" });

export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_ERROR",
  payload: error,
});