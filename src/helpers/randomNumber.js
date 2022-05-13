export const getRandomArrayNumber = () => {
  const numbers = [2000, 3000, 4000, 5000];
  const randomIndex = Math.floor(Math.random() * (3 + 1));

  return numbers[randomIndex];
};
