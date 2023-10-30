import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cardReducer } from "./reducers/card";
import { drawerReducer } from "./reducers/drawer";
import { productsDetailReducer } from "./reducers/productDetail";
import { productsReducer } from "./reducers/products";

const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
let initialState = {
  card: {
    cardItems: cardItems || [],
  },
};

const reducers = combineReducers({
  drawer: drawerReducer,
  products: productsReducer,
  product: productsDetailReducer,
  card: cardReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
