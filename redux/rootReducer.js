import { combineReducers } from "redux";

// reducers
import productsReducer from "./products/productsReducer";
import shopReducer from "./shop/shopReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  shopState: shopReducer,
});

export default rootReducer;
