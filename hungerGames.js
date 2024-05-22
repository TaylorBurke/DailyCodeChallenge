const tributeCandidates = [
  { name: "Katniss", gender: "F", age: 16, numberOfEntries: 6 },
  { name: "Peeta", gender: "M", age: 17, numberOfEntries: 6 },
  { name: "Primrose", gender: "F", age: 12, numberOfEntries: 1 },
  { name: "Gale", gender: "M", age: 17, numberOfEntries: 11 },
];

function isEligible(resident) {
  return resident.age >= 12 && resident.age <= 18;
}
const getTributes = (candidates) => {
  const boyCandidates = candidates.filter(
    (candidate) => candidate.gender === "M"
  );
  const girlCandidates = candidates.filter(
    (candidate) => candidate.gender === "F"
  );

  const result = [];

  result.push(
    girlCandidates[Math.floor(Math.random() * girlCandidates.length)]
  );
  result.push(boyCandidates[Math.floor(Math.random() * boyCandidates.length)]);
  return result;
};

const drawTributes = (candidates) => {
  const entries = candidates.reduce((acc, candidate) => {
    for (let i = 0; i < candidate.numberOfEntries; i++) {
      acc.push(candidate);
    }
    return acc;
  }, []);
  return getTributes(entries);
};
