import React from "react";
import { render } from "@testing-library/react";
import { SvgIconStyle } from "../index";

describe("Test SvgIconStyle component", () => {
  test("renders SvgIconStyle component", () => {
    const { container } = render(
      <SvgIconStyle
        color="paper"
        src="https://minimal-kit-react.vercel.app/static/icons/shape-avatar.svg"
        sx={{
          width: 80,
          height: 36,
          zIndex: 9,
          bottom: -15,
          position: "absolute",
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
