const singlesArray = [
  {
    name: "Diana Lee",
    age: 27,
    height: 160,
    gender: "Female",
    sign: "Taurus",
    favoriteFood: "Tacos",
    hobbies: ["Yoga", "Gardening", "Traveling"],
  },
  {
    name: "Ethan Moore",
    age: 28,
    height: 175,
    gender: "Male",
    sign: "Aries",
    favoriteFood: "Sushi",
    hobbies: ["Photography", "Hiking", "Cooking"],
  },
  {
    name: "Olivia Chen",
    age: 35,
    height: 165,
    gender: "Female",
    sign: "Libra",
    favoriteFood: "Pasta",
    hobbies: ["Painting", "Dancing", "Reading"],
  },
  {
    name: "Ryan Johnson",
    age: 42,
    height: 180,
    gender: "Male",
    sign: "Scorpio",
    favoriteFood: "Steak",
    hobbies: ["Golfing", "Fishing", "Woodworking"],
  },
  {
    name: "Sophie Taylor",
    age: 24,
    height: 170,
    gender: "Female",
    sign: "Gemini",
    favoriteFood: "Salad",
    hobbies: ["Running", "Blogging", "Photography"],
  },
  {
    name: "Marcus Brown",
    age: 39,
    height: 185,
    gender: "Male",
    sign: "Leo",
    favoriteFood: "Burgers",
    hobbies: ["Basketball", "Traveling", "Cooking"],
  },
  {
    name: "Emma Wilson",
    age: 31,
    height: 163,
    gender: "Female",
    sign: "Capricorn",
    favoriteFood: "Sushi",
    hobbies: ["Yoga", "Painting", "Gardening"],
  },
  {
    name: "Noah Garcia",
    age: 33,
    height: 178,
    gender: "Male",
    sign: "Pisces",
    favoriteFood: "Pizza",
    hobbies: ["Surfing", "Guitar", "Meditation"],
  },
  {
    name: "Ava Thompson",
    age: 27,
    height: 168,
    gender: "Female",
    sign: "Sagittarius",
    favoriteFood: "Thai food",
    hobbies: ["Rock climbing", "Writing", "Photography"],
  },
  {
    name: "Liam Davis",
    age: 36,
    height: 182,
    gender: "Male",
    sign: "Virgo",
    favoriteFood: "BBQ",
    hobbies: ["Cycling", "Kayaking", "Birdwatching"],
  },
];

const testForAstrology = (person) => {
  return (
    person.sign === "Scorpio" ||
    person.sign === "Pisces" ||
    person.sign === "Taurus" ||
    person.sign === "Virgo" ||
    person.sign === "Capricorn"
  );
};

const isNotMale = (person) => person.gender !== "Male";

const isYogi = (person) => person.hobbies.includes("Yoga");

const isOver30 = (person) => person.age >= 30;

const getBestSignsForCancer = (people) =>
  people.filter(
    (person) =>
      person.sign === "Scorpio" ||
      person.sign === "Pisces" ||
      person.sign === "Taurus" ||
      person.sign === "Virgo" ||
      person.sign === "Capricorn"
  );

const removeTheMen = (people) =>
  people.filter((person) => person.gender !== "Male");

const getTheYogis = (people) =>
  people.filter((person) => person.hobbies.includes("Yoga"));

const removeUnder30 = (people) => people.filter((person) => person.age >= 30);

function test1() {
  for (let i = 0; i < 100000; i++) {
    let mostCompatible1 = getBestSignsForCancer(
      removeTheMen(getTheYogis(removeUnder30(singlesArray)))
    );
  }
}

function test2() {
  for (let i = 0; i < 100000; i++) {
    let mostCompatible2 = singlesArray
      .filter(isOver30)
      .filter(isYogi)
      .filter(isNotMale)
      .filter(testForAstrology);
  }
}

console.time("test_timer_1");
test1();
console.timeEnd("test_timer_1");
console.time("test_timer_2");
test2();
console.timeEnd("test_timer_2");
