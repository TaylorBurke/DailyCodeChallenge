function playOneGame() {
  let result = [];
  let prevFlip = "";

  for (let i = 0; i < 100; i++) {
    const flip = Math.random() < 0.5 ? "H" : "T";
    result.push(flip);
    prevFlip = flip;
  }

  return result.join("");
}

// const scoreGame = (gameResult) => {
//   let player1Score = 0;
//   let player2Score = 0;
//   let prevFlip = "";

//   for (let i = 0; i < gameResult.length; i++) {
//     const currentFlip = gameResult[i];
//     if (prevFlip === "H" && currentFlip === "H") {
//       player1Score++;
//     } else if (prevFlip === "H" && currentFlip === "T") {
//       player2Score++;
//     }
//     prevFlip = currentFlip;
//   }

//   return { player1: player1Score, player2: player2Score };
// };

// console.log(scoreGame(playOneGame()));

// function calculateOdds(numFlips) {
//   let player1Wins = 0;
//   let player2Wins = 0;
//   let draws = 0;
//   const totalGames = 1000000; // Simulate a large number of games

//   for (let i = 0; i < totalGames; i++) {
//     const result = playOneGame(numFlips);
//     const scores = scoreGame(result);
//     if (scores.player1 > scores.player2) {
//       player1Wins++;
//     } else if (scores.player1 < scores.player2) {
//       player2Wins++;
//     } else {
//       draws++;
//     }
//   }

//   const player1Odds = player1Wins / totalGames;
//   const player2Odds = player2Wins / totalGames;
//   const drawOdds = draws / totalGames;

//   return { Player1: player1Odds, Player2: player2Odds, Draw: drawOdds };
// }

// function playOneGame(numFlips) {
//   let result = [];
//   let prevFlip = "";

//   for (let i = 0; i < numFlips; i++) {
//     const flip = Math.random() < 0.5 ? "H" : "T";
//     result.push(flip);
//     prevFlip = flip;
//   }

//   return result.join("");
// }

// function scoreGame(gameResult) {
//   let player1Score = 0;
//   let player2Score = 0;
//   let prevFlip = "";

//   for (let i = 0; i < gameResult.length; i++) {
//     const currentFlip = gameResult[i];
//     if (prevFlip === "H" && currentFlip === "H") {
//       player1Score++;
//     } else if (prevFlip === "H" && currentFlip === "T") {
//       player2Score++;
//     }
//     prevFlip = currentFlip;
//   }

//   return { player1: player1Score, player2: player2Score };
// }

function getProbabilityOfWinner(numberOfCoinFlips) {
  // There are 2^n possible outcomes for n coin flips
  const totalPossibleOutcomes = Math.pow(2, numberOfCoinFlips);

  // Player 1 wins when the sequence ends with an even number of consecutive heads
  const player1Wins = Math.pow(2, numberOfCoinFlips - 1);

  // Player 2 wins when the sequence ends with a single tails preceded by a heads
  const player2Wins = Math.pow(2, numberOfCoinFlips - 1);

  // The remaining outcomes lead to a tie (when the sequence ends with an odd number of consecutive tails)
  const draws = totalPossibleOutcomes - 2 * player1Wins;

  const playerOneChanceOfWinning = player1Wins / totalPossibleOutcomes;
  const playerTwoChanceOfWinning = player2Wins / totalPossibleOutcomes;
  const chanceOfTie = draws / totalPossibleOutcomes;

  return {
    Player1: playerOneChanceOfWinning.toFixed(3),
    Player2: playerTwoChanceOfWinning.toFixed(3),
    Draw: chanceOfTie.toFixed(3),
  };
}

console.log("odds:");
console.log(getProbabilityOfWinner(100));
