// OBJECT DESTRUCTURING

// const person = {
//   name: "Brandon",
//   age: "3000",
//   height: "6 feet tall",
//   location: {
//     city: "Shoreview",
//     temp: 75
//   }
// };
// // Add default value to name
// const { name = "Pal", age, height } = person;
// // change temp to temperature
// const { city, temp: temperature } = person.location;

// console.log(name, age, height);
// console.log(city, temperature);

// console.log(
//   `Hi, my name is ${name}. I am currently ${age}. My height is ${height}`
// );
// if (city && temperature) {
//   console.log(`I live in ${city}. The current temp is ${temperature}`);
// }

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(`${publisherName}`);

// ARRAY DESTRUCTURING

const address = ["1234 Easy Street", "Madrid", "Spain", "28047"];
const [, city, state] = address;

console.log(`You are in ${address[1]}, ${address[2]}`);
console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "2.75"];

const [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);
