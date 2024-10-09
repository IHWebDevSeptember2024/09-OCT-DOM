// Ejemplo de block scope

let x = 1;

if (true) {
  let x = 2;
  console.log(x); // 2
  function myFunction() {
    // debido al hoisting, esta función es accesible fuera del scope
    let x = 3;
    console.log(x); // 3
  }
}

// function scope

myFunction();