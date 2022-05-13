import React from "react";
import {
  SearchInputWrapper,
  SearchStyle,
  SearchInputStyle,
} from "./SearchInput.styled";
import { Button } from "../../button";
import { Grid } from "@mui/material";

const SearchInput = ({
  placeholder,
  searchValue,
  onChangeHandle,
  resetSearchCriteria,
}) => (
  <SearchInputWrapper>
    <Grid item xs={12} md={12} lg={6} xl={4}>
      <SearchStyle>
        <SearchInputStyle
          type="text"
          placeholder={`${placeholder} search by name and alpha code...`}
          value={searchValue}
          onChange={onChangeHandle}
        />

        {searchValue.length > 0 && (
          <Button onClickHandle={resetSearchCriteria} />
        )}
      </SearchStyle>
    </Grid>
  </SearchInputWrapper>
);

export default SearchInput;
