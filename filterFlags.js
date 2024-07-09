const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeSingleDigits = (array) => {
  return array.filter((item) => item.toString().length > 1);
};
