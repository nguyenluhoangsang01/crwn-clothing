import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import usersReducer from "./users/users.reducer";

export default combineReducers({
  users: usersReducer,
  cart: cartReducer,
});
