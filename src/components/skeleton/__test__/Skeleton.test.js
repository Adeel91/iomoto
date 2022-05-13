import React from "react";
import { render } from "@testing-library/react";
import SkeletonLoading from "../index";

describe("Test Skeleton component", () => {
  test("renders SkeletonLoading component", () => {
    const { container } = render(<SkeletonLoading />);
    expect(container).toMatchSnapshot();
  });

  test("renders SkeletonLoadingWrapper component", () => {
    const { container } = render(<SkeletonLoading wrapper={true} />);
    expect(container).toMatchSnapshot();
  });
});
