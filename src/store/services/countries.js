import { get } from "../../api/restClient";
import * as url from "../../api/apiUrl";
import { faker } from "@faker-js/faker";
import { COUNTRY_IMAGES } from "../../mockData/country";

export const getCountries = () => get(url.GET_COUNTRIES);

export const getFormattedCountriesResponse = (response) => {
  return (
    response &&
    response.map((item, index) => {
      return {
        id: index,
        cover:
          item.coatOfArms.svg ||
          COUNTRY_IMAGES[Math.floor(Math.random() * COUNTRY_IMAGES.length)],
        title: item.name.common,
        alphaCode: item.cca2,
        createdAt: faker.date.past(1),
        author: {
          name: faker.name.findName(),
          avatarUrl: item.flags.svg,
        },
      };
    })
  );
};
