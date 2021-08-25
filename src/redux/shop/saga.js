import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./actions";
import shopActionTypes from "./types";

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const collectionSnapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      collectionSnapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
