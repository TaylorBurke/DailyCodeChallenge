// make a function that takes an array and returns a new array with the elements shuffled
// using the faro shuffle algorithm

const faroShuffle = (arr) => {
  let half = Math.floor(arr.length / 2);
  let shuffled = [];
  for (let i = 0; i < half; i++) {
    shuffled.push(arr[i]);
    shuffled.push(arr[i + half]);
  }
  return shuffled;
};

// Test the function
console.log(faroShuffle([1, 2, 3, 4, 5, 6])); // [1, 4, 2, 5, 3, 6]
