import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/Search";
import Search from "../search";
import { Container, Grid } from "@mui/material";
import { BaseCard } from "../card";
import { Pagination } from "../pagination";

const Countries = ({ countries, countryList }) => {
  const itemsPerPage = 12;
  const searchField = "countries";
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [state] = useContext(SearchContext);
  const countryResult = state.searchResults[searchField];

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(countryResult.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(countryResult.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, countryResult]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % countryResult.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Search
        searchField={searchField}
        countryList={countryList}
        setItemOffset={setItemOffset}
      />

      <Grid container spacing={3}>
        {currentItems &&
          currentItems.map((item, index) => (
            <BaseCard key={index} card={item} index={index} />
          ))}

        {(countries?.error || !currentItems?.length) && (
          <Container>No data found</Container>
        )}
      </Grid>

      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </>
  );
};

export default Countries;
