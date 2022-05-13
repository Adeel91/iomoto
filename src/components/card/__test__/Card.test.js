import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Card from "../Card";
import { faker } from "@faker-js/faker";
import {
  COUNTRY_FLAGS,
  COUNTRY_IMAGES,
  COUNTRY_TITLES,
} from "../../../mockData/country";

const country = {
  id: faker.datatype.uuid(),
  cover: COUNTRY_IMAGES[0],
  title: COUNTRY_TITLES[0],
  alphaCode: COUNTRY_TITLES[0].slice(0, 2),
  createdAt: faker.date.past(1),
  author: {
    name: faker.name.findName(),
    avatarUrl: COUNTRY_FLAGS[0],
  },
};

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe("Test Card component", () => {
  test("renders Card component", () => {
    const { container } = render(
      <Router>
        <Card card={country} index={1} />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
