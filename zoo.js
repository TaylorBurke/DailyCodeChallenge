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

// the purpose of this function is to return the animals that
// don't eat the foods listed in the foods array
const filterAnimalsByFoodPreference = (animalsList, foodsArray) => {
  return animalsList.filter((animal) => {
    return !animal.foodPreferences.find((foodItem) =>
      foodsArray.includes(foodItem)
    );
  });
};

console.log(
  filterAnimalsByFoodPreference(animals, ["twigs", "leaves", "grass"])
);
