import { all, call, put, takeLatest } from "redux-saga/effects";
import { userActionTypes } from "../users/users.types";
import { clearCart } from "./cart.actions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
