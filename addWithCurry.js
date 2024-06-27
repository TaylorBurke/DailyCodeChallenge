const addTwo = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(addTwo(1)(2)); // 3

// this time we are using currying to add three numbers together
const addThree = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(addThree(1)(2)(3)); // 6
