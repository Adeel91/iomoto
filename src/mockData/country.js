import { faker } from "@faker-js/faker";

export const COUNTRY_TITLES = [
  "Bulgaria",
  "Dominican Republic",
  "Estonia",
  "France",
  "Germany",
  "Iceland",
  "India",
  "Maldives",
  "Netherlands",
  "Pakistan",
  "Poland",
  "Romania",
  "Sweden",
  "Turkey",
  "Ukraine",
  "United States of America",
];

export const COUNTRY_IMAGES = [
  "https://i.pinimg.com/736x/a8/3d/8e/a83d8e7cae8fbe2f1d7a65dbbe9808ed--travel-and-tourism-swat.jpg",
  "https://www.schengenvisainfo.com/wp-content/uploads/2019/01/Mallorca-Spain.jpg",
  "https://www.travelinglifestyle.net/wp-content/uploads/2020/05/Beautiful-Places-Pakistan-To-Visit.jpg",
  "https://www.schengenvisainfo.com/wp-content/uploads/2019/01/Mallorca-Spain.jpg",
  "https://i.brecorder.com/wp-content/uploads/2019/12/pakistan-tourism-1024.jpg",
  "https://www.planetware.com/wpimages/2020/03/poland-best-places-to-visit-wroclaw.jpg",
  "https://i.tribune.com.pk/media/images/1008232-faisalmain-1450079992/1008232-faisalmain-1450079992.jpg",
  "https://i.dawn.com/large/2015/12/567d1a1cc9595.jpg",
  "https://www.schengenvisainfo.com/wp-content/uploads/2019/01/Moscow-Russia.jpg",
  "https://media.easemytrip.com/media/Blog/India/636965576069221850/636965576069221850zwRutz.jpg",
  "https://i.ytimg.com/vi/oyh8CmUtLZc/maxresdefault.jpg",
  "http://cdn.cnn.com/cnnnext/dam/assets/180427181229-zemiun-serbia-1.jpg",
  "https://www.tripfore.com/wp-content/uploads/2018/12/Mexico-city-1024x683.jpg",
  "https://www.worldatlas.com/r/w1200/upload/6f/99/8f/shutterstock-114479500.jpg",
];

export const COUNTRY_FLAGS = [
  "https://cdn.countryflags.com/thumbs/bulgaria/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/dominican-republic/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/estonia/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/germany/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/iceland/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/india/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/maldives/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/pakistan/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/poland/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/sweden/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/turkey/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/ukraine/flag-square-500.png",
  "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-500.png",
];

const countries = [...Array(15)].map((_, index) => ({
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

export default countries;
