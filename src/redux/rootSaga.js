import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/saga";
import userSagas from "./users/saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
