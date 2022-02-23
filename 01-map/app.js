// MAP Method
const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const view = people.map((person) => {
  // return `${person.age}`;
  return `<h2>${person.position}</h2>`;
});
// console.log(view);

console.log(view.join(" "));

const result = document.querySelector("#result");
result.innerHTML = view.join("");
