const shoppingCart = [
  {
    itemName: "Wireless Mouse",
    quantity: 1,
    price: 25.99,
    size: "small",
  },
  {
    itemName: "Bluetooth Headphones",
    quantity: 2,
    price: 59.99,
    size: "medium",
  },
  {
    itemName: "USB-C Charging Cable",
    quantity: 3,
    price: 12.99,
    size: "small",
  },
];

// write a function that takes in a shopping cart and returns the total price of the items in the cart
function getTotalPrice(cart) {
  return cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
}

// write a function that takes in a shopping cart and returns the total quantity of items in the cart
function getTotalQuantity(cart) {
  return cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
}

// if the total price of the items in the cart is greater than $100, apply a 10% discount
function applyDiscount(cart) {
  const totalPrice = getTotalPrice(cart);
  if (totalPrice > 100) {
    return totalPrice * 0.9;
  }
  return totalPrice;
}

// add tax of 8% to the total price of the items in the cart
function addTax(cart) {
  return getTotalPrice(cart) * 1.08;
}

// calculate shipping. Every small
