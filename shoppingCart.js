const shoppingCart = [
  {
    itemName: "Wireless Mouse",
    quantity: 1,
    price: 25.99,
  },
  {
    itemName: "Bluetooth Headphones",
    quantity: 2,
    price: 59.99,
  },
  {
    itemName: "USB-C Charging Cable",
    quantity: 3,
    price: 12.99,
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

// write a function that takes in a shopping cart and returns the total price of the items in the cart with tax and discount applied
// it should also calculate shipping, which is $5.99 for orders under $50 and free for orders $50 and over (before tax)
const calculateTotal = (cart) => {
  const totalPrice = applyDiscount(cart);
  const totalPriceWithTax = addTax(cart);
  if (totalPrice < 50) {
    return totalPriceWithTax + 5.99;
  }
  return totalPriceWithTax;
};
