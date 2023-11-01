import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cardReducer } from "./reducers/card";
import {drawerReducer, favoriteDrawerReducer} from "./reducers/drawer";
import { productsDetailReducer } from "./reducers/productDetail";
import { productsReducer } from "./reducers/products";
import { searchReducer } from "./reducers/search";
import {favReducer} from "./reducers/favorite";
import {commentReducer} from "./reducers/comment";

const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
const favItems = JSON.parse(localStorage.getItem("favItems")) || [];
const commentItems = JSON.parse(localStorage.getItem("commentItems")) || [];

let initialState = {
  card: {
    cardItems: cardItems || [],
  },
  favItem: {
    favItems: favItems || [],
  },
  commentItem: {
    commentItems: commentItems || [],
  },
};

const reducers = combineReducers({
  drawer: drawerReducer,
  favorite:favoriteDrawerReducer,
  products: productsReducer,
  product: productsDetailReducer,
  card: cardReducer,
  search: searchReducer,
  favItem:favReducer,
  commentItem:commentReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
