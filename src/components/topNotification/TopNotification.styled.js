import React from "react";
import { styled } from "@mui/material/styles";

export const RootStyle = styled("div")(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: theme.palette.secondary.main,
  borderTop: `2px solid ${theme.palette.secondary.lighter}`,
  color: theme.palette.secondary.contrastText,
  position: "fixed",
  lineHeight: "50px",
  bottom: 0,
  zIndex: 1201,
  width: "100%",
  textAlign: "center",
  fontWeight: "bold",
}));
