const btn = document.querySelector('.btn');

const debounce = () => {
  let timeoutID;
  return () => {
    console.log(timeoutID);
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      console.log('you clicked me');
    }, 2000);
  };
};

btn.addEventListener('click', debounce(() => {}));

// delay logic
// so it runs 2s after last click
// setTimeout returns id, which pass into clearTimeout
