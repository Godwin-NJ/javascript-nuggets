// Reduce - Objects
// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

let { totalAmount, totalItem } = cart.reduce(
  (total, cartItem) => {
    // console.log(total, cartItem);
    const { price, amount } = cartItem;
    total.totalItem += amount;
    total.totalAmount += price * amount;
    return total;
  },
  {
    totalItem: 0,
    totalAmount: 0,
  }
);
totalAmount = parseInt(totalAmount.toFixed(2));
console.log(totalAmount, totalItem);

// // github repos example
const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const cartItems = async () => {
  const reponse = await fetch(url);
  const data = await reponse.json();
  console.log("all data", data);
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    if (language) {
      if (total[language]) {
        total[language] += 1;
      } else {
        total[language] = 1;
      }
    }

    // console.log(repo);
    return total;
  }, {});
  console.log(newData);
};

cartItems();

// let name = {
//   name: "",
//   age: "",
// };

// name["name"] = "today";
// name["age"] = parseInt(`30 yrs`);
// console.log(name);

// JOHN SMILGA CODE
// let { totalItems, cartTotal } = cart.reduce(
//   (total, cartItem) => {
//     const { amount, price } = cartItem
//     // count items
//     total.totalItems += amount
//     // count sum
//     total.cartTotal += amount * price
//     return total
//   },
//   {
//     totalItems: 0,
//     cartTotal: 0,
//   }
// )
// cartTotal = parseFloat(cartTotal.toFixed(2))
// // console.log(total)
// console.log(totalItems, cartTotal)
// // github repos example

// const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

// const fetchRepos = async () => {
//   const response = await fetch(url)
//   const data = await response.json()
//   const newData = data.reduce((total, repo) => {
//     const { language } = repo
//     // if (language) {
//     //   if (total[language]) {
//     //     total[language] = total[language] + 1
//     //   } else {
//     //     total[language] = 1
//     //   }
//     // }
//     if (language) {
//       total[language] = total[language] + 1 || 1
//     }
//     return total
//   }, {})
//   console.log(newData)
// }

// fetchRepos()
