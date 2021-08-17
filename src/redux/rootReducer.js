import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/reducer";
import collectionsReducer from "./shop/reducer";
import usersReducer from "./users/users.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: collectionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
