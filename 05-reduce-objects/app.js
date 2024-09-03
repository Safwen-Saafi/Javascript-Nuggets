// Reduce - Objects
// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel 7pro",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log(total)
console.log(totalItems, cartTotal);



// github repos example
const url = "https://api.github.com/users/safwen-saafi/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1
    //   } else {
    //     total[language] = 1
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos();




// Array of objects
const orders = [
  { id: 1, item: 'Laptop', quantity: 2, price: 1000 },
  { id: 2, item: 'Phone', quantity: 1, price: 500 },
  { id: 3, item: 'Tablet', quantity: 3, price: 250 },
];

// Use reduce to calculate the total revenue
// order is an object from orders
const totalRevenue = orders.reduce((accumulator, order) => {
  return accumulator + order.quantity * order.price;
}, 0);

console.log(totalRevenue); // Output: 3250
