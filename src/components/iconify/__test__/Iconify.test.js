import React from "react";
import { render } from "@testing-library/react";
import { Iconify } from "../index";

describe("Test Iconify component", () => {
  test("renders Iconify component", () => {
    const { container } = render(<Iconify icon="eva:menu-2-fill" />);
    expect(container).toMatchSnapshot();
  });
});
