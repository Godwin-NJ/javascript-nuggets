// faster/easier way to access/unpack values from arrays

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};
const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;

console.log(firstName, last, city, zip, favoriteSibling);

const firName = bob.first;
const laName = bob.last;
const sis = bob.siblings.sister;

console.log(firName, laName, sis);

function printPerson(person) {
  console.log(person.first);
}

printPerson(bob);
