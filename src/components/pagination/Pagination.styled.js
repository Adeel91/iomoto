import { styled } from "@mui/material/styles";

export const StyledPaginateContainer = styled("div")(({ theme }) => ({
  ".pagination": {
    margin: "50px 0 30px",
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    cursor: "pointer",
  },
  ".break-me": { cursor: "default" },
  ".pagination__link": { fontWeight: "bold", padding: "0 10px" },
  ".pagination__link--all": { padding: "0 10px" },
  ".pagination__link--active": {
    borderColor: "transparent",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  ".pagination__link--disabled": { color: theme.palette.grey["400"] },
}));
