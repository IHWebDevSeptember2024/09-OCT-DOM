console.log("HOLA");

// 1. Event listener, "escuchar" el click

const menuBtnElement = document.querySelector("#menu-icon");
// 2. localizar el menú
const menuElement = document.querySelector("#menu");

menuBtnElement.addEventListener("click", () => {
  console.log("MENU CLICKED");
  menuElement.style.display = "block";
});

const workers = [
  { name: "Alice", role: "Developer", email: "alice@example.com" },
  { name: "Bob", role: "Designer", email: "bob@example.com" },
  { name: "Charlie", role: "Product Manager", email: "charlie@example.com" },
];

console.log(workers);

workers.forEach((worker) => {
  // creo un div
  const divElement = document.createElement("div");
  divElement.classList.add("card");
  // creo un h2
  const h2Element = document.createElement("h2");
  h2Element.innerText = worker.name;
  // creo un h3
  const h3Element = document.createElement("h3");
  h3Element.innerText = worker.role;
  // creo un paragraph
  const pElement = document.createElement("p");
  pElement.innerText = worker.email;
  const employeesSectionElement = document.querySelector("#employees-section");

  [h2Element, h3Element, pElement].forEach((element) => {
    divElement.appendChild(element);
  });

  employeesSectionElement.appendChild(divElement);
});
