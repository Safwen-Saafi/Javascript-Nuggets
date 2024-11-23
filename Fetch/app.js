//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url))

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
const getTours = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data; // Return the data
  } catch (error) {
    console.log(error);
    throw error; // Rethrow error to handle it outside
  }
};

// Handle the returned Promise
getTours()
  .then((data) => console.log(data))
  .catch((error) => console.log('Error fetching tours:', error));

