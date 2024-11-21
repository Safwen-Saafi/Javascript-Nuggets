// MAP Method
const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];
// Shortcut ctrl + alt + x
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    futureAge: item.age + 20,
  };
});
console.log(newPeople);

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

// Function to calculate tax and format the price
const addTaxAndFormat = products.map((product) => {
  const taxRate = 0.1; // 10% tax
  const finalPrice = product.price + product.price * taxRate;

  return {
    ...product,
    tax: Math.round(product.price * taxRate), // Tax amount, formatted to 2 decimals
    finalPrice: parseInt(`${finalPrice.toFixed(2)}`), // Final price
  };
});

console.log(addTaxAndFormat);
