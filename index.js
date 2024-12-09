console.log("CALCULADORA");
console.log("------------");
const rl = require("readline-sync");

let operacion = rl.question("Que operación deseas realizar (suma, resta): ");

function suma(num1, num2) {
  let resultadoSuma = num1 + num2;
  return resultadoSuma;
}
let suma = suma();

let resta = function resta(num1, num2) {
  let resultadoResta = num1 - num2;
  return resultadoResta;
};

let multiplicacion = function (num1, num2) {
  let resultado = num1 * num2;
  return resultado;
};
