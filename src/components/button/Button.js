import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonStyle } from "./Button.styled";

const Button = ({ onClickHandle }) => (
  <ButtonStyle onClick={onClickHandle}>
    <CloseIcon />
  </ButtonStyle>
);

export default Button;
