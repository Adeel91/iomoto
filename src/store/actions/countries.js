import {
  GET_COUNTRIES,
  GET_COUNTRIES_FAIL,
  GET_COUNTRIES_SUCCESS,
} from "../actionTypes";

export const getCountries = () => {
  return {
    type: GET_COUNTRIES,
  };
};

export const getCountriesSuccess = (countries) => {
  return {
    type: GET_COUNTRIES_SUCCESS,
    payload: countries,
  };
};

export const getCountriesFail = (error) => {
  return {
    type: GET_COUNTRIES_FAIL,
    payload: error,
  };
};
