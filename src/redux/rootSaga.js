import { all, call } from "redux-saga/effects";
import cartSaga from "./cart/saga";
import shopSaga from "./shop/saga";
import userSagas from "./users/saga";

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSagas), call(cartSaga)]);
}
