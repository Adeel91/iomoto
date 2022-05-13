import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/Search";
import { SearchInput } from "./searchInput";

const Search = (props) => {
  const [state, dispatch] = useContext(SearchContext);

  let searchInputField = state.search[props.searchField];

  useEffect(() => {
    if (state.search[props.searchField] === "") {
      dispatch({
        type: "FILTERED_RESULTS",
        payload: {
          [props.searchField]: props.countryList,
        },
      });
    }
  }, [props.countryList]);

  const changeSearchTerm = (e) => {
    const searchTerm = { ...state.search, [props.searchField]: e.target.value };

    props.setItemOffset(0);
    updateSearchCriteria(searchTerm);
    filterSearchResults(searchTerm);
  };

  const filterSearchResults = (searchTerm) => {
    let filteredResults = props.countryList.filter((item) => {
      const result = searchInputField.length < 2 ? item.alphaCode : item.title;
      return result.match(new RegExp(searchTerm[props.searchField], "gi"));
    });

    const results = {
      ...state.searchResults,
      [props.searchField]: filteredResults,
    };
    updateFilteredResults(results);
  };

  const updateSearchCriteria = (payloadData) => {
    dispatch({ type: "SEARCH_TEXT", payload: payloadData });
  };

  const updateFilteredResults = (payloadData) => {
    dispatch({ type: "FILTERED_RESULTS", payload: payloadData });
  };

  const filterSearchData = (searchData) => {
    const search = searchData.title;
    const searchTerm = { ...state.search, [props.searchField]: search };

    updateSearchCriteria(searchTerm);

    return searchTerm;
  };

  const resetSearchCriteria = () => {
    const resetSearchTerm = { ...state.search, [props.searchField]: "" };
    updateSearchCriteria(resetSearchTerm);

    const resetSearchResults = {
      ...state.searchResults,
      [props.searchField]: props.countryList,
    };
    updateFilteredResults(resetSearchResults);
  };

  return (
    <section>
      <SearchInput
        placeholder="Country"
        searchValue={searchInputField}
        onChangeHandle={changeSearchTerm}
        resetSearchCriteria={resetSearchCriteria}
      />
    </section>
  );
};

export default Search;
