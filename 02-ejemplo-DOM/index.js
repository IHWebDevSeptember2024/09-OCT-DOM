console.log("JS working");

const counterElement = document.querySelector("#counter");

let index = 0;

const myInterval = setInterval(() => {
  counterElement.innerText = index;
  index++;
  if (index >= 100) {
    clearInterval(myInterval);
  }
}, 100);

setTimeout(() => {
  // código asíncrono
  console.log("Hola después de 3 segundos");
}, 3000);

console.log("ESTE CONSOLE LOG SALE ANTES DEL TIMEOUT");
