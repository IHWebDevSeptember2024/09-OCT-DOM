const animals = [
  { name: "Lion", type: "Mammal", legs: 4 },
  { name: "Eagle", type: "Bird", legs: 2 },
  { name: "Shark", type: "Fish", legs: 0 },
  { name: "Frog", type: "Amphibian", legs: 4 },
  { name: "Spider", type: "Arachnid", legs: 8 },
];

// const copyOfAnimals = animals.map((animal) => animal);
// const copyOfAnimals = [...animals];
// const copyOfAnimals = [].concat(animals)
// const copyOfAnimals = Array.from(animals);

// una opción
/* const copyOfAnimalsString = JSON.stringify(animals);
const copyOfAnimals = JSON.parse(copyOfAnimalsString); */

const copyOfAnimals = structuredClone(animals);


copyOfAnimals.push({ name: "Elephant", type: "Mammal", legs: 4 });

copyOfAnimals[0].name = "Simba";

console.log("ORIGINAL: ", animals);
console.log("COPY: ", copyOfAnimals);
