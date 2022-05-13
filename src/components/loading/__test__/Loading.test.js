import React from "react";
import { render } from "@testing-library/react";
import Loading from "../Loading";

describe("Test Loading component", () => {
  test("renders Loading component", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
