export const generateRandomTimeSeries = (baseVal, count, yRange) => {
  let i = 0;
  let series = [];

  while (i < count) {
    const x = baseVal;
    const y =
      Math.floor(Math.random() * (yRange.max - yRange.min + 1)) + yRange.min;

    series.push([x, y]);
    baseVal += 86400000;
    i++;
  }

  return series;
};
