//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 6s third green; 10s in total from the beginning
// IN SEQUENCE !!!!

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
    .then(() => addColor(3000, ".second", "green"))
    .then(() => addColor(6000, ".third", "blue"));
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve("Promise fulfilled");
      }, time);
    } else {
      reject(`There is no such element : "${selector}"`);
    }
  });
}
