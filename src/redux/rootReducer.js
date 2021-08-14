import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";

export default combineReducers({
  users: usersReducer,
});
