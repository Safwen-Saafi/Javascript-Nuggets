const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    console.log(await addColor(1000, '.first', 'red'));
    console.log(await addColor(3000, '.second', 'green'));
    console.log(await addColor(6000, '.third', 'blue'));
  } catch (error) {
    console.error(error);
  }
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve('Promise fulfilled');
      }, time);
    } else {
      reject(`There is no such element : "${selector}"`);
    }
  });
}


// This is the same example as the app.js
//  With async/await the promises are all handled sequentially, one after the other
