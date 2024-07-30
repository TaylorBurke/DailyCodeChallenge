// Given the array of cards ["QH","JS","JC","2D","5H","5C","7D","8S","9S"]
// Split the deck into two halves:
// Left half: ["QH","JS","JC","2D","5H"]
// Right half: ["5C","7D","8S","9S"]
// Start adding cards from alternating halves, starting with the left half:
// ["5H"]
// ["9S","5H"]
// ["2D","9S","5H"]
// ["8S","2D","9S","5H"]
// ...
// ["QH","5C","JS","7D","JC","8S","2D","9S","5H"]
// ...finally, return the shuffled deck!

const faroShuffle = (deck) => {
  const half = Math.ceil(deck.length / 2);
  const leftHalf = deck.slice(0, half);
  const rightHalf = deck.slice(half);
  const shuffledDeck = [];
  for (let i = 0; i < leftHalf.length; i++) {
    shuffledDeck.push(leftHalf[i]);
    if (rightHalf[i]) {
      shuffledDeck.push(rightHalf[i]);
    }
  }
  return shuffledDeck;
};

console.log(
  faroShuffle(["QH", "JS", "JC", "2D", "5H", "5C", "7D", "8S", "9S"])
); // ["QH","5C","JS","7D","JC","8S","2D","9S","5H"]
