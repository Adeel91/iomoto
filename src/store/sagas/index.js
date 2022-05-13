import { all, fork } from "redux-saga/effects";

import CountriesSaga from "./countries";

export default function* rootSaga() {
  yield all([fork(CountriesSaga)]);
}
