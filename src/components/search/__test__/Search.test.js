import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Search from "../index";
import { SearchProvider } from "../../../contexts/Search";
import { faker } from "@faker-js/faker";
import {
  COUNTRY_FLAGS,
  COUNTRY_IMAGES,
  COUNTRY_TITLES,
} from "../../../mockData/country";

const countriesData = [...Array(15)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: COUNTRY_IMAGES[Math.floor(Math.random() * COUNTRY_IMAGES.length)],
  title: COUNTRY_TITLES[index + 1],
  alphaCode: COUNTRY_TITLES[index + 1].slice(0, 2),
  createdAt: faker.date.past(1),
  author: {
    name: faker.name.findName(),
    avatarUrl: COUNTRY_FLAGS[Math.floor(Math.random() * COUNTRY_FLAGS.length)],
  },
}));

describe("Test Search component", () => {
  test("renders Search component", () => {
    const SearchMockedComponent = () => (
      <SearchProvider>
        <Search
          searchField="countries"
          countryList={countriesData}
          setItemOffset={jest.fn()}
        />
      </SearchProvider>
    );

    const { container } = render(
      <Router>
        <SearchMockedComponent />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
