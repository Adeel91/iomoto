import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
} from "../actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const CountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, loading: true };
    case GET_COUNTRIES_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case GET_COUNTRIES_FAIL:
      return { ...state, error: true, loading: false };

    default:
      return { ...state };
  }
};

export default CountriesReducer;
