console.log("CALCULADORA");
console.log("------------");
const rl = require("readline-sync");

let operacion = rl.question("Que operación deseas realizar (suma, resta): ");

function suma(num1, num2) {
  let resultadoSuma = num1 + num2;
  return resultadoSuma;
}
let suma = suma();
