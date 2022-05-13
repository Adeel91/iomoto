const { generateRandomTimeSeries } = require("../dateSeries");

describe("Test DateSeries", () => {
  test("Generate random time series", () => {
    const recordedTime = new Date("2019-09-23T06:00:00").getTime();
    const range = {
      min: 10,
      max: 80,
    };

    expect(generateRandomTimeSeries(recordedTime, 20, range)).toBeInstanceOf(
      Array
    );
  });
});
