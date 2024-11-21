// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down to only unique values
// ['all',...] - turn it back to array

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);
const names = ['saf',...new Set(menu.map((item) => item.name))];
console.log(names);

const result = document.querySelector('.result');//target the div result
result.innerHTML = categories.map((category) => {
  return `<button>${category}</button>`;
}).join('');
// Set returns unique values of categories
