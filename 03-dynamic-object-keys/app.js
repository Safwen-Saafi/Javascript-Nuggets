const person = ['hello', 'great'];

const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);

const result = document.querySelector('.result');
result.innerHTML = newPerson.map((item) => {
  return `<div>${item}</div>`;
}).join('');
