const person = ["hello", "great"];

const newPerson = person.map(function (item) {
  if (item === "hello") {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);
console.log(person[0]);


// How to set dynamic key values
const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "john");
updateState("job", "developer");
updateState("loading", false);
updateState("products", []);

console.log(state);

const result = document.querySelector(".result");
result.innerHTML = newPerson
  .map((item) => {
    return `<div>${item}</div>`;
  })
  .join("");
