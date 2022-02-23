const person = ["hello", "great"];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === "hello") {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);

// square bracket notation
const name = {
  person: "peter",
  level: 400,
};
console.log(name.person, name.level);

// targetting key in an object
const houses = {
  lekki: "Dbanj",
  country: "Norway",
};
console.log(houses["lekki"]);
console.log(houses["country"]);

const key = "Nigeria";
const tourist = {
  [key]: "obodo cantle ranch",
};
console.log(tourist);

const state = {
  name: "",
  country: "",
  purchase: false,
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "Godwin");
updateState("country", "Nigeria");
updateState("purchase", true);
console.log(state);
