import React from "react";
import { styled } from "@mui/material/styles";

export const DRAWER_WIDTH = 260;

export const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

export const LocaleSwitcherStyle = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
}));
