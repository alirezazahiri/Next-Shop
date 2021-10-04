import { combineReducers } from "redux";

// reducers
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
});

export default rootReducer;
