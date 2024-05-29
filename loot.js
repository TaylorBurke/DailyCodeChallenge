const loot = [
  { name: "Gasoline Canister", type: "fuel", value: 8 },
  { name: "Rusty Crowbar", type: "misc", value: 3 },
  { name: "Bits of leather", type: "food", value: 2 },
  { name: "Ruined Tire", type: "fuel", value: 2 },
  { name: "Mud cake", type: "food", value: 3 },
];

function sortLoot(loot) {
  return loot.sort((a, b) => b.value - a.value);
}

function filterLoot(loot, type) {
  return loot.filter((item) => item.type === type);
}
function divideEqually(loot) {
  // Sort the loot in descending order based on value
  const sortedLoot = loot.slice().sort((a, b) => b.value - a.value);

  // Initialize two empty arrays to store the divided loot
  const loot1 = [];
  const loot2 = [];

  // Variable to keep track of the sum of values in each loot
  let sum1 = 0;
  let sum2 = 0;

  // Iterate through the sorted loot
  for (const item of sortedLoot) {
    // Check which loot has the smaller sum and add the item to that loot
    if (sum1 <= sum2) {
      loot1.push(item);
      sum1 += item.value;
    } else {
      loot2.push(item);
      sum2 += item.value;
    }
  }

  // Return the two divided loot arrays
  return [loot1, loot2];
}

console.log(divideEqually(loot));
