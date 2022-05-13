import React from "react";
import { styled } from "@mui/material/styles";

export const ButtonStyle = styled("button")(({ theme }) => ({
  width: "40px",
  position: "absolute",
  height: "40px",
  right: "10px",
  borderRadius: "100%",
  fontSize: "25px",
  background: theme.palette.primary.main,
  color: "#fff",
  border: 0,
  top: "5px",
}));
