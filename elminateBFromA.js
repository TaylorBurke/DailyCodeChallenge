// a function to remove all occurrences of any item in array b from array a

function eliminateBFromA(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(eliminateBFromA([1, 2, 3, 3, 4, 5, 5], [5, 2])); // [1, 3, 3, 4]
