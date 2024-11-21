// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, second, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
console.log(job, rest);

// functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};
getAverage(person.name,67,78,89,78)   //This line is with the rest operator, in fact the rest is declared in the function

// const testScores = [67, 78, 99, 100];  //When declaring the testScores array and then invoke it in the function, we use the spread operator
// getAverage(person.name, ...testScores);

// Key Differences:
// Spread Operator: Expands or spreads elements, useful for copying, combining, or passing elements as separate arguments.
// Rest Operator: Collects or condenses elements, useful for handling an indefinite number of arguments or extracting parts of an array or object.
