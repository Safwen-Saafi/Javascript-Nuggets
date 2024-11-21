// faster/easier way to access/unpack values from objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
    brother: 'ilyes'
  },
};


const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling, brother: favouriteBrother },
} = bob;

console.log(firstName, last, city, zip, favoriteSibling, favouriteBrother);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName,lastName,sister);

function printPerson({first, last, city, siblings: {sister}}) {
  // console.log(person.first);
  console.log(first, last, city, sister)
}

printPerson(bob);
