import React from "react";
import { InputStyle } from "./Input.styled";

const Input = ({ value, setValue, setPalette }) => {
  return (
    <InputStyle
      readOnly
      value={value}
      onChange={setValue}
      onClick={setPalette}
      placeholder="Enter value..."
    />
  );
};

export default Input;
