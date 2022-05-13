import Actions from "./constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.SEARCH_TEXT:
      return {
        ...state,
        search: action.payload,
      };
    case Actions.FILTERED_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };

    default:
      return state;
  }
};

export const initialState = {
  search: {
    countries: "",
  },
  searchResults: {
    countries: [],
  },
};
