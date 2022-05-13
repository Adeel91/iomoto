import { styled } from "@mui/material/styles";

export const SearchInputWrapper = styled("div")(({ theme }) => ({
  input: {
    outline: 0,
    height: "50px",
    borderRadius: "30px",
    padding: "0 60px 0 15px",
    backgroundColor: "#fdfbfb",
    border: "1px solid #ccc",
    color: "#333",
    fontSize: "15px",
    marginBottom: "30px",
  },
}));

export const SearchStyle = styled("div")(() => ({
  position: "relative",
  zIndex: 2,
  width: "100%",
}));

export const SearchInputStyle = styled("input")(() => ({
  width: "100%",
}));
