const animals = [
  { name: "Leo", species: "lion", foodPreferences: ["meat", "fish"] },
  { name: "Zoe", species: "zebra", foodPreferences: ["grass", "leaves"] },
  { name: "Ella", species: "elephant", foodPreferences: ["grass", "fruits"] },
  { name: "Gigi", species: "giraffe", foodPreferences: ["leaves", "twigs"] },
  {
    name: "Ari",
    species: "alligator",
    foodPreferences: ["meat", "fish", "insects"],
  },
];

const reduceToVegetarians = (animals) => {
  const meats = ["meat", "fish", "insects"];

  return animals.reduce((acc, animal) => {
    // we need to return the animals whose foodPreferences don't include meat items
    if (animal.foodPreferences.find((food) => !meats.includes(food))) {
      acc.push(animal);
    }
    return acc;
  }, []);
};

console.log(reduceToVegetarians(animals));
