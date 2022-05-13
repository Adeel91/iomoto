import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Test Button component", () => {
  test("renders Button component", () => {
    const { container } = render(<Button onClickHandle={null} />);
    expect(container).toMatchSnapshot();
  });
});
