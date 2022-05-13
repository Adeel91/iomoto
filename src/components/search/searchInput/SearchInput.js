import React from "react";
import { SearchInputWrapper, SearchStyle } from "./SearchInput.styled";
import { Button } from "../../button";

const SearchInput = ({
  placeholder,
  searchValue,
  onChangeHandle,
  resetSearchCriteria,
}) => (
  <SearchInputWrapper>
    <SearchStyle>
      <input
        type="text"
        placeholder={`${placeholder} search by name and alpha code...`}
        value={searchValue}
        onChange={onChangeHandle}
      />

      {searchValue.length > 0 && <Button onClickHandle={resetSearchCriteria} />}
    </SearchStyle>
  </SearchInputWrapper>
);

export default SearchInput;
