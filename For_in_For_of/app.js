const user = { name: 'John', age: 25, role: 'developer' };

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Output:
// name: John
// age: 25
// role: developer



const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(`Index: ${index}, Value: ${colors[index]}`);
}

// Output:
// Index: 0, Value: red
// Index: 1, Value: green
// Index: 2, Value: blue



const colores = ['red', 'green', 'blue'];

for (let color of colores) {
  console.log(color);
}

// Output:
// red
// green
// blue


const map = new Map();
map.set('name', 'John');
map.set('age', 25);

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Output:
// name: John
// age: 25


const mappa = new Map();
mappa.set('name', 'John');
mappa.set('age', 30);
mappa.set(true, 'Boolean Key');
console.log(mappa);
