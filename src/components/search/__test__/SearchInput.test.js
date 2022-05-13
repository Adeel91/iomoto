import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { SearchInput } from "../searchInput";

describe("Test SearchInput component", () => {
  test("renders SearchInput component", () => {
    const { container } = render(
      <Router>
        <SearchInput
          placeholder="countries"
          searchValue="pak"
          onChangeHandle={jest.fn()}
          resetSearchCriteria={jest.fn()}
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
