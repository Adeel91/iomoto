import { takeLatest, call, put } from "redux-saga/effects";

import { GET_COUNTRIES } from "../actionTypes";
import {
  getCountries,
  getFormattedCountriesResponse,
} from "../services/countries";

import { getCountriesFail, getCountriesSuccess } from "../actions/countries";

function* onGetCountries() {
  try {
    const response = yield call(getCountries);
    const result = getFormattedCountriesResponse(response);
    yield put(getCountriesSuccess(result));
  } catch (error) {
    yield put(getCountriesFail());
  }
}

function* CountriesSaga() {
  yield takeLatest(GET_COUNTRIES, onGetCountries);
}

export default CountriesSaga;
