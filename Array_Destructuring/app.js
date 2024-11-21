// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [john, peter, ,anna, kelly, susan] = friends;

console.log(john, peter);
console.log(john, peter, anna, kelly);
console.log(john, peter, anna, kelly, susan);
// susan which is the last item won't find any values left so it'll display undefined

// Swap Variables

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);
