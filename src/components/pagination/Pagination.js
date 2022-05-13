import React from "react";
import ReactPaginate from "react-paginate";
import { StyledPaginateContainer } from "./Pagination.styled";
import { useTranslation } from "react-i18next";

const Pagination = ({ pageCount, handlePageClick }) => {
  const { t } = useTranslation();

  return (
    <StyledPaginateContainer>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        nextLabel={t("next")}
        previousLabel={t("previous")}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        breakClassName="break-me"
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        pageLinkClassName={"pagination__link--all"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </StyledPaginateContainer>
  );
};

export default Pagination;
