import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Logo from "../Logo";

describe("Test Logo component", () => {
  test("renders Logo component", () => {
    const { container } = render(
      <Router>
        <Logo />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
