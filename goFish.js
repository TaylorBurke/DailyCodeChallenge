const fish = ["salmon", "trout", "bass", "bass"];

const catchLevels = {
  salmon: 0,
  trout: 0,
  bass: 0,
};
const minumumViablePopulation = {
  salmon: 1,
  trout: 1,
  bass: 2,
};

const countFish = (fish) => {
  // return an object with the number of each instance of fish
  return fish.reduce((acc, fish) => {
    acc[fish] = (acc[fish] || 0) + 1;
    return acc;
  }, {});
};

const canSustainCatch = (fish, catchLevels, minumumViablePopulation) => {
  const fishCounts = countFish(fish);
  return Object.keys(fishCounts).every((fish) => {
    return (
      fishCounts[fish] - catchLevels[fish] >= minumumViablePopulation[fish]
    );
  });
};

console.log(canSustainCatch(fish, catchLevels, minumumViablePopulation));
