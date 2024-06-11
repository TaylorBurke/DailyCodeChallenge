// Level 1: Food Heap Management
let foodHeap = 0;

function addFood(amount) {
  foodHeap += amount;
}

function eatFood(amount) {
  foodHeap -= amount;
}

// Level 2: Ant Class
class Ant {
  constructor() {
    // setInterval(() => this.forage(), 3000); // Forage every 3 seconds
    // setInterval(() => this.consume(), 4000); // Consume every 4 seconds

    setInterval(() => this.forage(), 3000 + Math.random() * 2000); // Forage every 3-5 seconds
    setInterval(() => this.consume(), 4000 + Math.random() * 2000); // Consume every 4-6 seconds
  }

  forage() {
    addFood(Math.floor(Math.random() * 4));
  }

  consume() {
    eatFood(Math.floor(Math.random() * 2) + 1);
  }
}

// Level 3: Queen Ant
class QueenAnt extends Ant {
  constructor() {
    super();
    this.ants = [];
    setInterval(() => this.spawnAnt(), 1000); // Spawn an ant every second
  }

  spawnAnt() {
    this.ants.push(new Ant());
  }

  consume() {
    const amount = Math.floor(Math.random() * 2) + 1;
    if (foodHeap - amount < 0) {
      this.ants = []; // Kill all ants if not enough food
      console.log("Queen starved, all ants died!");
    } else {
      eatFood(amount);
      console.log("Queen ate " + amount + " food, " + foodHeap + " food left.");
    }
  }
}

// Start the simulation
const queen = new QueenAnt();
